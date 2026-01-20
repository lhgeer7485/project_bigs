import styles from "./Board.module.css";
import type { Board as BoardType } from "../types/BoardList.ts";
import * as React from "react";

interface Props {
  board: BoardType;
  onClick: () => void;
}

const Board: React.FC<Props> = ({ board, onClick }) => {
  return (
    <li className={styles.container} onClick={onClick}>
      <p>{board.id}</p>
      <p>{board.title}</p>
      <p>{board.category}</p>
      <p>{board.createdAt}</p>
    </li>
  );
};

export default Board;
