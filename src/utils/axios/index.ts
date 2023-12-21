import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080/api/v1/",
  timeout: 30000,
});

export const Axios = {
  axiosGet(endpoint: string, config?: AxiosRequestConfig) {
    return instance.get(endpoint, config);
  },
  axiosPut<T>(endpoint: string, body: T, config?: AxiosRequestConfig) {
    return instance.put(endpoint, body, config);
  },
  axiosPost<T>(endpoint: string, body: T, config?: AxiosRequestConfig) {
    return instance.post(endpoint, body, config);
  },
  axiosDelete(endpoint: string, config?: AxiosRequestConfig) {
    return instance.delete(endpoint, config);
  },
};
