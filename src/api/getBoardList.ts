import { api } from "../utils/api.ts";
import type { BoardList } from "../types/BoardList.ts";

const getBoardList = async (page: number): Promise<BoardList> => {
  const res = await api.get("/boards", { params: { page, size: 10 } });

  return res.data;
};

export default getBoardList;
