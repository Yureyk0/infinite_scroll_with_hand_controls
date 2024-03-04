import {
  MediaPipeHandsMediaPipeModelConfig,
  MediaPipeHandsTfjsModelConfig,
} from "@tensorflow-models/hand-pose-detection";

export const BASE_URL: string = "https://api.unsplash.com";
export const PHOTO_PAGE_URL = "/photos";
export const ACCESS_TOKEN: string =
  "Client-ID 33jWdlc9b44QWP5A7syPojukLGj0RLtQjxRy-3f1hQA";
export const CONTENT_TYPE: string = "Content-type";
export const APP_JSON: string = "application/json";
export const MODEL_CONFIG:
  | MediaPipeHandsMediaPipeModelConfig
  | MediaPipeHandsTfjsModelConfig
  | undefined = {
  runtime: "mediapipe",
  solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
  modelType: "full",
};
export const FINGER_JOINTS = [
  [0, 1, 2, 3, 4],
  [0, 5, 6, 7, 8],
  [0, 9, 10, 11, 12],
  [0, 13, 14, 15, 16],
  [0, 17, 18, 19, 20],
];
