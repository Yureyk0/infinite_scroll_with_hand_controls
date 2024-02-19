import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.unsplash.com/photos",
  headers: {
    "Content-type": "application/json",
    Authorization: "Client-ID 33jWdlc9b44QWP5A7syPojukLGj0RLtQjxRy-3f1hQA",
  },
});

const getPhotos = async () => {
  const response = await apiClient.get("");
  return response.data;
};
export default getPhotos;
