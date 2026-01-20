import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Board } from "../types/Board.ts";
import getBoard from "../api/getBoard.ts";
import deleteBoard from "../api/deleteBoard.ts";

const useDetail = () => {
  const { id } = useParams();
  const boardId = Number(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data } = useQuery<Board>({
    queryKey: ["board", id],
    queryFn: () => getBoard(boardId),
    enabled: !isNaN(boardId),
  });

  const onBack = () => {
    navigate("/");
  };
  const onDelete = () => {
    mutation.mutate();
  };

  const mutation = useMutation({
    mutationFn: () => deleteBoard(boardId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      });
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { id, data, onBack, onDelete };
};

export default useDetail;
