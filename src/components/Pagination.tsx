import * as React from "react";

interface Props {
  startPage: number;
  endPage: number;
  goPage: (page: number) => void;
  onPrevBlock: () => void;
  onNextBlock: () => void;
}

const Pagination: React.FC<Props> = ({
  startPage,
  endPage,
  goPage,
  onPrevBlock,
  onNextBlock,
}) => {
  return (
    <div>
      <button onClick={onPrevBlock}>이전</button>
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      ).map((p) => (
        <button key={p} onClick={() => goPage(p)}>
          {p + 1}
        </button>
      ))}
      <button onClick={onNextBlock}>다음</button>
    </div>
  );
};

export default Pagination;
