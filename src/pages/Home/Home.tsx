import { InfiniteScroll } from "../../components/InfiniteScroll/InfiniteScroll";
import { usePhotos } from "../../hooks/usePhotos";
import { useState } from "react";

import "./Home.css";
import { Cam, CamWrapper } from "../../components/Cam";
import { HandPoseDetection } from "../../components/model/HandPoseDetection";

export function Home() {
  const pageSize = 4;

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePhotos({ pageSize });

  if (error) return <div>{error.message}</div>;

  return (
    <div className="container">
      <div>
        {/* <WebCam webcamRef={webcamRef} canvasRef={canvasRef} /> */}
        <CamWrapper>
          <Cam />
          <HandPoseDetection />
        </CamWrapper>
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
