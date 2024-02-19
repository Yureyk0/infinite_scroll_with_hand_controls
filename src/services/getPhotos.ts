import axios from "axios";
import { ACCESS_TOKEN, BASE_URL, PHOTO_PAGE_URL } from "../constants/constants";
import { Photo } from "../types/photo";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: ACCESS_TOKEN,
  },
});

const getPhotos = async (page: number) => {
  const response = await apiClient.get<Photo[]>(`${PHOTO_PAGE_URL}${page}`);
  return response.data;
};
export default getPhotos;
