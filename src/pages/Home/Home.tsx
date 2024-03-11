import { useUserMedia } from "../../hooks/useUserMedia";
import { useMemo } from "react";

import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { usePhotos } from "../../hooks/usePhotos";
import { HandPoseDetection } from "../../components/HandPoseDetection/HandPoseDetection";

import "./Home.css";

export function Home() {
  const pageSize = 4;

  const {
    data: photos,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePhotos({ pageSize });

  const constraints = useMemo(
    () => ({
      video: true,
    }),
    [],
  );

  const { stream } = useUserMedia(constraints);

  const onThumbs = (coefficient: number) => {
    window.scrollBy(0, window.innerHeight * coefficient * 0.1);
  };

  if (error) return <div>{error.message}</div>;

  return (
    <div className="container">
      {stream && (
        <div>
          <HandPoseDetection onThumbs={onThumbs} stream={stream} />
        </div>
      )}
      <InfiniteScroll
        isLoading={isLoading || isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      >
        {photos?.pages.map((page) =>
          page.map((photo) => (
            <div key={photo.id}>
              <img
                src={photo.urls.regular}
                alt={photo.id}
                className="photo-size"
              />
            </div>
          )),
        )}
      </InfiniteScroll>
    </div>
  );
}
