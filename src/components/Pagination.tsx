import * as React from "react";
import Button from "./button/Button.tsx";
import stylesButton from "./button/Button.module.css";
import stylesButtonAccent from "./button/ButtonAccent.module.css";

interface Props {
  page: number;
  startPage: number;
  endPage: number;
  goPage: (page: number) => void;
  onPrevBlock: () => void;
  onNextBlock: () => void;
}

const Pagination: React.FC<Props> = ({
  page,
  startPage,
  endPage,
  goPage,
  onPrevBlock,
  onNextBlock,
}) => {
  return (
    <div>
      <Button onClick={onPrevBlock} styles={stylesButton} text={"이전"} />
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((p) => (
        <Button
          key={p}
          onClick={() => goPage(p)}
          styles={page === p ? stylesButtonAccent : stylesButton}
          text={(p + 1).toString()}
        />
      ))}
      <Button onClick={onNextBlock} styles={stylesButton} text={"다음"} />
    </div>
  );
};

export default Pagination;
