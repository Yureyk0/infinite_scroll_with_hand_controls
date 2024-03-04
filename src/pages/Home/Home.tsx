import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { usePhotos } from "../../hooks/usePhotos";
import { HandPoseDetection } from "../../components/HandPoseDetection/HandPoseDetection";

import "./Home.css";
import { useUserMedia } from "../../hooks/useUserMedia";

export function Home() {
  const pageSize = 4;

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePhotos({ pageSize });
  const { stream } = useUserMedia({ video: true });

  const onThumbs = (coefficient: number) => {
    window.scrollBy(0, window.innerHeight * coefficient * 0.1);
  };

  if (error) return <div>{error.message}</div>;

  return (
    <div className="container">
      {stream && (
        <div>
          <HandPoseDetection onThumbs={onThumbs} />
        </div>
      )}
      <InfiniteScroll
        isLoading={isLoading || isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      >
        {data?.pages.map((page) =>
          page.map((photo) => (
            <div key={photo.id}>
              <img src={photo.urls.regular} alt={photo.id} height={100} />
            </div>
          )),
        )}
      </InfiniteScroll>
    </div>
  );
}
