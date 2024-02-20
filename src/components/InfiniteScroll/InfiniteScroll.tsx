import { useRef } from "react";
import { usePhotos } from "../../hooks/usePhotos";
import { Loader } from "../Loader/Loader";
import "./InfiniteScroll.css";
import { useOnScreen } from "../../hooks/useOnScreen";

export function InfiniteScroll() {
  const pageSize = 4;
  const { data, error, isLoading, fetchNextPage } = usePhotos({ pageSize });
  const intObserver = useRef<IntersectionObserver | null>(null);

  const secondLastLIRef = useOnScreen({
    isLoading,
    fetchNextPage,
    intObserver,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data?.pages.map((page, pageIndex) => (
        <ul key={pageIndex} className="page-container">
          {page.map((photo, photoIndex) => (
            <li
              key={photo.id}
              ref={
                data.pages.length - 1 === pageIndex &&
                page.length - 1 === photoIndex
                  ? secondLastLIRef
                  : null
              }
            >
              <img src={photo.urls.regular} height={100} />
            </li>
          ))}
        </ul>
      ))}
      <div>
        <Loader />
      </div>
    </div>
  );
}
