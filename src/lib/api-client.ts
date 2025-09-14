import axios, { type CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};
export const publicApi = axios.create(config);

// Authorization required
export const privateApi = axios.create(config);

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (!token) return config;
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});
