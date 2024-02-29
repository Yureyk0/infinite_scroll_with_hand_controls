import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { usePhotos } from "../../hooks/usePhotos";
import { useState } from "react";

import "./Home.css";
import { HandPoseDetection } from "../../components/HandPoseDetection/HandPoseDetection";

export function Home() {
  const pageSize = 4;

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const [coefficient, setCoefficient] = useState<number | null>(null);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePhotos({ pageSize });

  if (coefficient !== null && !isFetchingNextPage) {
    window.scrollBy(0, window.innerHeight * coefficient * 0.1);
  }

  if (error) return <div>{error.message}</div>;

  return (
    <div className="container">
      <div>
        <HandPoseDetection setCoefficient={setCoefficient} />
        <button onClick={() => setCaptureEnable((prevState) => !prevState)}>
          {isCaptureEnable ? "stop" : "start"}
        </button>
      </div>
      <InfiniteScroll
        isLoading={isLoading || isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      >
        {data?.pages.map((page) =>
          page.map((photo) => (
            <div key={photo.id}>
              <img src={photo.urls.regular} alt={photo.id} width={150} />
            </div>
          )),
        )}
      </InfiniteScroll>
    </div>
  );
}
