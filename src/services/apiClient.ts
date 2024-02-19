import axios from "axios";
import { ACCESS_TOKEN, APP_JSON, BASE_URL } from "../constants/constants";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": APP_JSON,
    Authorization: ACCESS_TOKEN,
  },
});

export default apiClient;
