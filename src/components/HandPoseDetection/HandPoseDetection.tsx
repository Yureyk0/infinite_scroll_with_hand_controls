import { useEffect, useRef, useState } from "react";
import {
  createDetector,
  SupportedModels,
  HandDetector,
} from "@tensorflow-models/hand-pose-detection";
import { MODEL_CONFIG } from "../../constants/constants";
import "./HandPoseDetection.css";
import { useUserMedia } from "../../hooks/useUserMedia";

const MODEL = SupportedModels.MediaPipeHands;
export const HandPoseDetection = ({
  onThumbs: onHand,
}: {
  onThumbs: (coefficient: number) => void;
}) => {
  const webcamRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [handDetector, setHandDetector] = useState<HandDetector>();
  const createDetectorStarted = useRef(false);

  const { stream } = useUserMedia({ video: true });

  useEffect(() => {
    const setupStream = () => {
      if (!stream) return;
      webcamRef.current!.srcObject = stream;
      webcamRef.current!.play();
    };

    setupStream();
  }, [stream]);

  useEffect(() => {
    if (createDetectorStarted.current) return;
    createDetectorStarted.current = true;

    const loadModel = async () => {
      setHandDetector(await createDetector(MODEL, MODEL_CONFIG));
      return;
    };

    loadModel();

    return () => {
      handDetector?.dispose();
    };
  }, [handDetector]);

  useEffect(() => {
    if (!handDetector) return;

    const detect = async (model: HandDetector) => {
      if (!canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d");

      if (!ctx) return;

      if (webcamRef.current === null || webcamRef.current.readyState !== 4)
        return;

      const video = webcamRef.current;
      const { videoWidth, videoHeight } = video;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const detections = await model.estimateHands(video);
      if (!detections) return;

      detections.forEach(({ keypoints }) => {
        if (keypoints[0].y < keypoints[4].y) {
          onHand(1 - keypoints[0].y / keypoints[4].y);
        } else {
          onHand(keypoints[4].y / keypoints[0].y - 1);
        }
      });
    };

    const intervalId = setInterval(() => {
      detect(handDetector);
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [onHand, handDetector]);

  return (
    <div className="camera_container">
      <video ref={webcamRef} className="position" />
      <canvas ref={canvasRef} className="position" />
    </div>
  );
};
