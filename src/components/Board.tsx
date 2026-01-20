import styles from "./Board.module.css";
import type { Board as BoardType } from "../types/BoardList.ts";
import * as React from "react";
import dateFilter from "../utils/date.ts";

interface Props {
  board: BoardType;
}

const Board: React.FC<Props> = ({ board }) => {
  return (
    <>
      <td className={styles.td}>{board.id}</td>
      <td className={styles.tdTitle}>{board.title}</td>
      <td className={styles.td}>{board.category}</td>
      <td className={styles.td}>{dateFilter(board.createdAt)}</td>
    </>
  );
};

export default Board;
