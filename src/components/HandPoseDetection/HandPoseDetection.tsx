import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  createDetector,
  SupportedModels,
  HandDetector,
} from "@tensorflow-models/hand-pose-detection";
import Webcam from "react-webcam";
import { MODEL_CONFIG } from "../../constants/constants";
import "./HandPoseDetection.css";

const MODEL = SupportedModels.MediaPipeHands;

const FINGER_JOINTS = [
  [0, 1, 2, 3, 4],
  [0, 5, 6, 7, 8],
  [0, 9, 10, 11, 12],
  [0, 13, 14, 15, 16],
  [0, 17, 18, 19, 20],
];

export const HandPoseDetection = ({
  setCoefficient,
}: {
  setCoefficient: Dispatch<SetStateAction<number | null>>;
}) => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [handDetector, setHandDetector] = useState<HandDetector>();
  const createDetectorPromiseRef = useRef<Promise<HandDetector>>();

  const detect = useCallback(
    async (model: HandDetector) => {
      if (!canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d");

      if (!ctx) return;

      if (
        typeof webcamRef.current === "undefined" ||
        webcamRef.current === null ||
        webcamRef.current.video?.readyState !== 4
      )
        return;

      const video = webcamRef.current.video;
      const { videoWidth, videoHeight } = video;

      video.width = videoWidth;
      video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const detections = await model.estimateHands(video);
      if (!detections) {
        setCoefficient(null);
        return;
      }
      detections.forEach(({ keypoints, handedness }) => {
        if (keypoints[0].y < keypoints[4].y) {
          setCoefficient(1 - keypoints[0].y / keypoints[4].y);
        } else {
          setCoefficient(keypoints[4].y / keypoints[0].y - 1);
        }
        FINGER_JOINTS.forEach((joint) => {
          ctx.beginPath();
          joint.forEach((idx) => {
            const x = webcamRef.current
              ? video.videoWidth - keypoints[idx].x
              : keypoints[idx].x;

            const y = keypoints[idx].y;

            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          });
          ctx.lineWidth = 3;
          ctx.strokeStyle = "white";
          ctx.stroke();
        });

        const color = handedness === "Left" ? "blue" : "red";

        keypoints.forEach((keypoint) => {
          const x = webcamRef.current
            ? video.videoWidth - keypoint.x
            : keypoint.x;
          const y = keypoint.y;
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, 3 * Math.PI);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.scale(1, 1);
        });
      });
    },
    [setCoefficient],
  );

  useEffect(() => {
    if (createDetectorPromiseRef.current) return;

    (async () => {
      const promise = createDetector(MODEL, MODEL_CONFIG);
      createDetectorPromiseRef.current = promise;
      setHandDetector(await promise);
    })();
  });

  useEffect(() => {
    if (!handDetector) return;

    const intervalId = setInterval(() => {
      detect(handDetector);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [detect, handDetector]);

  return (
    <div className="camera_container">
      <Webcam ref={webcamRef} mirrored className="position" />
      <canvas ref={canvasRef} className="position" />
    </div>
  );
};
