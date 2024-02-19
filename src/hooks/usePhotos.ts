import { useInfiniteQuery } from "react-query";
import { PHOTO_PAGE_URL } from "../constants/constants";
import { Photo } from "../types/photo";
import { Dispatch, SetStateAction } from "react";
import apiClient from "../services/apiClient";

interface PhotosQuery {
  pageSize: number;
}

const usePhotos = (
  query: PhotosQuery,
  setVisable: Dispatch<SetStateAction<boolean>>,
) =>
  useInfiniteQuery<Photo[], Error>({
    queryKey: ["photo", query.pageSize],

    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get(PHOTO_PAGE_URL, {
          params: {
            page: pageParam,
          },
        })
        .then((res) => {
          setVisable(false);

          return res.data;
        }),

    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePhotos;
