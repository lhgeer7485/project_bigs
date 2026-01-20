import styles from "./Board.module.css";
import type { Board as BoardType } from "../types/BoardList.ts";
import * as React from "react";

const Board: React.FC<BoardType> = (board) => {
  return (
    <li className={styles.container}>
      <p>{board.id}</p>
      <p>{board.title}</p>
      <p>{board.category}</p>
      <p>{board.createdAt}</p>
    </li>
  );
};

export default Board;
