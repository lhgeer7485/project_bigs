import type { Category } from "../../types/Category.ts";
import styles from "./CreateModal.module.css";
import CategoryBox from "../CategoryBox.tsx";
import Button from "../button/Button.tsx";
import stylesButton from "../button/Button.module.css";
import * as React from "react";
import useUpdate from "../../hooks/useUpdate.tsx";
import InputUpdateBox from "../InputUpdateBox.tsx";
import InputTextAreaUpdateBox from "../InputTextAreaUpdateBox.tsx";

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
        <InputUpdateBox
          placeholder={"제목"}
          onChange={onChangeTitle}
          value={title}
        />
        <p className={styles.msg}>{msgTitle}</p>
        <InputTextAreaUpdateBox
          placeholder={"내용"}
          onChange={onChangeContent}
          value={content}
        />
        <p className={styles.msg}>{msgContent}</p>
        <div className={styles.cfBox}>
          <CategoryBox
            value={category}
            onClickCategory={onClickCategory}
            categories={CATEGORIES}
          />
          <input type="file" onChange={onChangeFile} className={styles.file} />
        </div>
        <footer className={styles.footer}>
          <div className={styles.btnBox}>
            <Button onClick={onUpdate} styles={stylesButton} text={"확인"} />
          </div>
          <div className={styles.btnBox}>
            <Button onClick={onClose} styles={stylesButton} text={"취소"} />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default UpdateModal;
