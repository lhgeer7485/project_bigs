import axios from "axios";
import ZustandStore from "../stores/store.tsx";
import postRefresh from "../api/postRefresh.ts";

export const unAuthApi = axios.create({
  baseURL: "/api",
});

export const api = axios.create({
  baseURL: "/api",
});

api.interceptors.request.use((config) => {
  const { accessToken } = ZustandStore.getState();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      const {
        refreshToken,
        setAccessToken,
        removeAccessToken,
        removeRefreshToken,
      } = ZustandStore.getState();

      if (!refreshToken) {
        removeAccessToken();
        removeRefreshToken();
        return Promise.reject(error);
      }

      try {
        const { accessToken: newAccessToken } = await postRefresh(refreshToken);

        setAccessToken(newAccessToken);

        error.config.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(error.config);
      } catch (refreshError) {
        removeAccessToken();
        removeRefreshToken();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
