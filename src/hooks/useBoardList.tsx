import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getBoardList from "../api/getBoardList.ts";
import type { BoardList } from "../types/BoardList.ts";

const useBoardList = () => {
  const [page, setPage] = useState(0);

  const { data } = useQuery<BoardList>({
    queryKey: ["boards", page],
    queryFn: () => getBoardList(page),
  });

  const onClick = () => {
    setPage(page + 1);
  };

  return { data, onClick };
};

export default useBoardList;
