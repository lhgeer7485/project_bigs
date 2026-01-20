import useBoardList from "../hooks/useBoardList.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ZustandStore from "../stores/store.tsx";
import useModal from "../hooks/useModal.tsx";
import CreateModal from "./modal/CreateModal.tsx";
import Board from "./Board.tsx";
import Pagination from "./Pagination.tsx";
import stylesButton from "./button/Button.module.css";
import Button from "./button/Button.tsx";

const Home = () => {
  const {
    data,
    page,
    startPage,
    endPage,
    loginUsername,
    loginName,
    goPage,
    onPrevBlock,
    onNextBlock,
  } = useBoardList();
  const accessToken = ZustandStore((state) => state.accessToken);
  const { isCreateModal, onOpenCreateModal, onCloseCreateModal } = useModal();

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) navigate("/Login");
  }, [accessToken, navigate]);

  return (
    <main>
      <p>{loginUsername}</p>
      <p>{loginName}</p>
      <ul>
        {data?.content.map((board) => (
          <Board
            key={board.id}
            id={board.id}
            title={board.title}
            category={board.category}
            createdAt={board.createdAt}
          />
        ))}
      </ul>
      <Button onClick={onOpenCreateModal} styles={stylesButton} text={"생성"} />
      <Pagination
        page={page}
        startPage={startPage}
        endPage={endPage}
        goPage={goPage}
        onPrevBlock={onPrevBlock}
        onNextBlock={onNextBlock}
      />

      {isCreateModal && <CreateModal onClose={onCloseCreateModal} />}
    </main>
  );
};

export default Home;
