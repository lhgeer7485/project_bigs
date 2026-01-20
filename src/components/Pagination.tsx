import * as React from "react";
import Button from "./button/Button.tsx";
import stylesButton from "./button/Button.module.css";
import stylesButtonAccent from "./button/ButtonPageAccent.module.css";
import stylesButtonPage from "./button/ButtonPage.module.css";
import styles from "./Pagination.module.css";

interface Props {
  page: number;
  startPage: number;
  endPage: number;
  goPage: (page: number) => void;
  onPrevBlock: () => void;
  onNextBlock: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<Props> = ({
  page,
  startPage,
  endPage,
  goPage,
  onPrevBlock,
  onNextBlock,
  onPrevPage,
  onNextPage,
}) => {
  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <Button onClick={onPrevBlock} styles={stylesButton} text={"<<"} />
      </div>
      <div className={styles.box}>
        <Button onClick={onPrevPage} styles={stylesButton} text={"<"} />
      </div>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((p) => (
        <Button
          key={p}
          onClick={() => goPage(p)}
          styles={page === p ? stylesButtonAccent : stylesButtonPage}
          text={(p + 1).toString()}
        />
      ))}
      <div className={styles.box}>
        <Button onClick={onNextPage} styles={stylesButton} text={">"} />
      </div>
      <div className={styles.box}>
        <Button onClick={onNextBlock} styles={stylesButton} text={">>"} />
      </div>
    </main>
  );
};

export default Pagination;
