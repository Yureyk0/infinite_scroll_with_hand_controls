import { useCallback, useEffect, useRef } from "react";
import {
  createDetector,
  SupportedModels,
  HandDetector,
} from "@tensorflow-models/hand-pose-detection";
import Webcam from "react-webcam";

const MODEL = SupportedModels.MediaPipeHands;

const FINGER_JOINTS = [
  [0, 1, 2, 3, 4],
  [0, 5, 6, 7, 8],
  [0, 9, 10, 11, 12],
  [0, 13, 14, 15, 16],
  [0, 17, 18, 19, 20],
];

export const HandPoseDetection = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const detections = await model.estimateHands(video);

      detections.forEach((detection) => {
        FINGER_JOINTS.forEach((joint) => {
          ctx.beginPath();
          joint.forEach((idx) => {
            const x = webcamRef.current
              ? video.videoWidth - detection.keypoints[idx].x
              : detection.keypoints[idx].x;

            const y = detection.keypoints[idx].y;

            if (idx === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          });
          ctx.lineWidth = 3;
          ctx.strokeStyle = "white";
          ctx.stroke();
        });

        const color = detection.handedness === "Left" ? "blue" : "red";

        detection.keypoints.forEach((keypoint) => {
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
    [webcamRef],
  );

  useEffect(() => {
    async function runHandpose() {
      const loadModel = await createDetector(MODEL, {
        runtime: "mediapipe",
        solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
        modelType: "full",
      });

      setInterval(() => {
        detect(loadModel);
      }, 10);
    }
    runHandpose();
  }, [detect]);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        mirrored
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          height: 480,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};
