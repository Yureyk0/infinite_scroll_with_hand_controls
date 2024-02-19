import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import getPhotos from "../../services/getPhotos";
import { Photo } from "../../types/photo";
import "./InfiniteScroll.css";
import Loader from "../Loader/Loader";
import useOnScreen from "../../hooks/useOnScreen";

function InfiniteScroll() {
  const [photos, setPhotos] = useState<Photo[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  const { refetch: getAllPhotos } = useQuery<Photo[], Error>(
    "query-photos",
    async () => {
      return await getPhotos(page);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        setPhotos((previousState) => [...previousState, ...res]);
      },
    },
  );
  useEffect(() => {
    const controller = new AbortController();
    try {
      getAllPhotos();
    } catch (err) {
      setPhotos([]);
    }

    return () => {
      controller.abort();
    };
  }, [getAllPhotos, page]);
  useEffect(() => {
    if (isVisible) {
      setPage((page: number) => page + 1);
    }
  }, [isVisible, setPage]);

  return (
    <div>
      {photos?.map((photo) => <img src={photo.urls.regular} key={photo.id} />)}
      <Loader setPage={setPage} refLoader={ref} />
    </div>
  );
}

export default InfiniteScroll;
