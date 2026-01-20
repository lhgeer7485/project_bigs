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
import styles from "./Home.module.css";
import userImage from "../assets/user.png";

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
    onDetail,
    onPrevPage,
    onNextPage,
  } = useBoardList();
  const accessToken = ZustandStore((state) => state.accessToken);
  const { isCreateModal, onOpenCreateModal, onCloseCreateModal } = useModal();

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) navigate("/Login");
  }, [accessToken, navigate]);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src={userImage} alt={"userImage"} className={styles.img} />
        <div className={styles.between}>
          <div className={styles.user}>
            <p className={styles.p}>{loginUsername}</p>
            <p className={styles.p}>{loginName}</p>
          </div>
          <div className={styles.box}>
            <Button
              onClick={onOpenCreateModal}
              styles={stylesButton}
              text={"작성"}
            />
          </div>
        </div>
      </header>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th1}>번호</th>
            <th className={styles.th2}>제목</th>
            <th className={styles.th3}>카테고리</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {data?.content.map((board) => (
            <tr
              key={board.id}
              onClick={() => onDetail(board.id)}
              className={styles.tr}
            >
              <Board board={board} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={page}
        startPage={startPage}
        endPage={endPage}
        goPage={goPage}
        onPrevBlock={onPrevBlock}
        onNextBlock={onNextBlock}
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
      />

      {isCreateModal && <CreateModal onClose={onCloseCreateModal} />}
    </main>
  );
};

export default Home;
