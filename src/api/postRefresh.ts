import { unAuthApi } from "../utils/api.ts";

const postRefresh = async (refreshToken: string) => {
  const res = await unAuthApi.post("/auth/refresh", { refreshToken });
  return res.data;
};

export default postRefresh;
