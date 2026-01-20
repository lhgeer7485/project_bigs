import { useQuery } from "@tanstack/react-query";
import getBoardList from "../api/getBoardList.ts";
import type { BoardList } from "../types/BoardList.ts";
import ZustandStore from "../stores/store.tsx";
import { useShallow } from "zustand/react/shallow";
import { useNavigate } from "react-router-dom";

const BLOCK_SIZE = 5;

const useBoardList = () => {
  const [page, setPage, loginUsername, loginName] = ZustandStore(
    useShallow((state) => [
      state.page,
      state.setPage,
      state.loginUsername,
      state.loginName,
    ]),
  );

  const navigate = useNavigate();

  const { data } = useQuery<BoardList>({
    queryKey: ["boards", page],
    queryFn: () => getBoardList(page),
  });

  const totalPages = data?.totalPages ?? 0;

  const block = Math.floor(page / BLOCK_SIZE);
  const startPage = block * BLOCK_SIZE;
  const endPage = Math.min(startPage + BLOCK_SIZE - 1, totalPages - 1);

  const goPage = (target: number) => {
    if (target >= 0 && target < totalPages) {
      setPage(target);
    }
  };

  const onNextBlock = () => {
    if (endPage < totalPages - 1) goPage(endPage + 1);
  };

  const onPrevBlock = () => {
    if (startPage > 0) goPage(startPage - 1);
  };

  const onDetail = (id: number) => {
    navigate(`/boards/${id}`);
  };

  return {
    data,
    page,
    startPage,
    endPage,
    totalPages,
    loginUsername,
    loginName,
    onDetail,
    goPage,
    onPrevBlock,
    onNextBlock,
  };
};

export default useBoardList;
