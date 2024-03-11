import { useState, useEffect } from "react";

export interface UserMedia {
  stream: MediaStream | null;
}

export const useUserMedia = (
  constraints: MediaStreamConstraints,
): UserMedia => {
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const { video, audio, peerIdentity, preferCurrentTab } = constraints;
    let didCancel = false;
    let newStream: MediaStream | undefined;

    const getUserMedia = async () => {
      newStream = await navigator.mediaDevices.getUserMedia({
        video,
        audio,
        peerIdentity,
        preferCurrentTab,
      });
      if (!didCancel) {
        setStream(newStream);
      }
    };

    getUserMedia();

    return () => {
      didCancel = true;
      newStream?.getVideoTracks().map((track) => track.stop());
      newStream?.getAudioTracks().map((track) => track.stop());
    };
  }, [constraints]);

  return {
    stream,
  };
};
