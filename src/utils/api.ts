import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getAccessToken = () => localStorage.getItem("accessToken");
export const setAccessToken = (token: string) =>
  localStorage.setItem("accessToken", token);
export const removeAccessToken = () => localStorage.removeItem("accessToken");

export const getRefreshToken = () => localStorage.getItem("refreshToken");
export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem("refreshToken", refreshToken);
export const removeRefreshToken = () => localStorage.removeItem("refreshToken");

export default api;
