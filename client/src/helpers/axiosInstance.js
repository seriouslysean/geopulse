import axios from "axios";

let axiosInstance = axios;
axiosInstance = axios.create({
  baseURL: process.env.BASE_URL
});

export default axiosInstance;
