import { useInfiniteQuery } from "react-query";
import { PHOTO_PAGE_URL } from "../constants/constants";
import { Photo } from "../types/photo";
import { apiClient } from "../services/apiClient";

interface PhotosQuery {
  pageSize: number;
}

export const usePhotos = (query: PhotosQuery) =>
  useInfiniteQuery<Photo[], Error>({
    queryKey: ["photo", query.pageSize],

    queryFn: async ({ pageParam = 1 }) => {
      const resPhotos = await apiClient.get(PHOTO_PAGE_URL, {
        params: {
          page: pageParam,
        },
      });
      return resPhotos.data;
    },

    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
