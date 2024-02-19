import { useEffect, useState } from "react";
import usePhotos from "../../hooks/usePhotos";
import Loader from "../Loader/Loader";
import "./InfiniteScroll.css";

function InfiniteScroll() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pageSize = 4;
  const { data, error, isLoading, fetchNextPage } = usePhotos({ pageSize });
  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [fetchNextPage, isVisible]);

  if (isLoading) return <div>Loading.....!</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data?.pages.map((page, index) => (
        <div key={index} className="page-container">
          {page.map((photo) => (
            <img src={photo.urls.regular} key={photo.id} height={100} />
          ))}
        </div>
      ))}
      <Loader setIsVisible={setIsVisible} />
    </div>
  );
}

export default InfiniteScroll;
