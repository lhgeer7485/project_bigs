import { api } from "../utils/api.ts";

const deleteBoard = async (id: number) => {
  const res = await api.delete(`/boards/${id}`);

  return res.data;
};

export default deleteBoard;
