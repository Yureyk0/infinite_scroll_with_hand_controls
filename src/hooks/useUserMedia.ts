import { useState, useEffect } from "react";

export interface UserMedia {
  stream?: MediaStream | null;
  error?: unknown | null;
}

export const useUserMedia = (
  constraints: MediaStreamConstraints = { video: true },
): UserMedia => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    if (stream) return;

    let didCancel = false;

    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (!didCancel) {
          setStream(stream);
        }
      } catch (err) {
        if (!didCancel) {
          setError(err);
        }
      }
    };

    const cancel = () => {
      didCancel = true;

      if (!stream) return;

      if ((stream as MediaStream).getVideoTracks) {
        (stream as MediaStream).getVideoTracks().map((track) => track.stop());
      }

      if ((stream as MediaStream).getAudioTracks) {
        (stream as MediaStream).getAudioTracks().map((track) => track.stop());
      }

      if ((stream as MediaStreamTrack).stop) {
        (stream as MediaStreamTrack).stop();
      }
    };

    getUserMedia();

    return cancel;
  }, [constraints, stream, error]);

  return {
    stream,
    error,
  };
};
