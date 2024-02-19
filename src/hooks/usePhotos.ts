import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { ACCESS_TOKEN, BASE_URL, PHOTO_PAGE_URL } from "../constants/constants";
import { Photo } from "../types/photo";

interface PhotosQuery {
  pageSize: number;
}

const usePhotos = (query: PhotosQuery) =>
  useInfiniteQuery<Photo[], Error>({
    queryKey: ["photo", query],

    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(BASE_URL + PHOTO_PAGE_URL, {
          headers: {
            "Content-type": "application/json",
            Authorization: ACCESS_TOKEN,
          },
          params: {
            page: pageParam,
          },
        })
        .then((res) => res.data),

    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePhotos;
