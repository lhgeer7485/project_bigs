import type { Category } from "../../types/Category.ts";
import styles from "./CreateModal.module.css";
import CategoryBox from "../CategoryBox.tsx";
import Button from "../button/Button.tsx";
import stylesButton from "../button/Button.module.css";
import * as React from "react";
import useUpdate from "../../hooks/useUpdate.tsx";

interface Props {
  id: number;
  onClose: () => void;
  prevData: prevData;
}

interface prevData {
  title: string;
  content: string;
  category: Category;
}

const CATEGORIES: Category[] = ["NOTICE", "FREE", "QNA", "ETC"];

const UpdateModal: React.FC<Props> = ({ id, onClose, prevData }) => {
  const {
    title,
    content,
    category,
    onChangeTitle,
    onChangeContent,
    onClickCategory,
    onChangeFile,
    msgTitle,
    msgContent,
    onUpdate,
  } = useUpdate({ id, onClose, prevData });

  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <input onChange={onChangeTitle} value={title}></input>
        <p>{msgTitle}</p>
        <input onChange={onChangeContent} value={content}></input>
        <p>{msgContent}</p>
        <CategoryBox
          value={category}
          onClickCategory={onClickCategory}
          categories={CATEGORIES}
        />
        <input type="file" onChange={onChangeFile}></input>
        <Button onClick={onUpdate} styles={stylesButton} text={"확인"} />
        <Button onClick={onClose} styles={stylesButton} text={"취소"} />
      </div>
    </main>
  );
};

export default UpdateModal;
