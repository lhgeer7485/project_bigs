import { api } from "../utils/api.ts";
import type { Board as BoardType } from "../types/Board.ts";

const getBoard = async (id: number): Promise<BoardType> => {
  const res = await api.get(`/boards/${id}`);
  return res.data;
};

export default getBoard;
