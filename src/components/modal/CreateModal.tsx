import styles from "./CreateModal.module.css";
import * as React from "react";
import useCreate from "../../hooks/useCreate.tsx";
import stylesButton from "../button/Button.module.css";
import Button from "../button/Button.tsx";
import CategoryBox from "../CategoryBox.tsx";
import type { Category } from "../../types/Category.ts";
import InputBox from "../InputBox.tsx";
import InputTextAreaBox from "../InputTextAreaBox.tsx";

interface Props {
  onClose: () => void;
}

const CATEGORIES: Category[] = ["NOTICE", "FREE", "QNA", "ETC"];

const CreateModal: React.FC<Props> = ({ onClose }) => {
  const {
    onChangeTitle,
    onChangeContent,
    onClickCategory,
    onChangeFile,
    onCreate,
    msgTitle,
    msgContent,
    category,
  } = useCreate({ onClose });

  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <InputBox
          placeholder={"제목"}
          onChange={onChangeTitle}
          onKeyDown={() => {}}
          type={"input"}
        />
        <p className={styles.msg}>{msgTitle}</p>
        <InputTextAreaBox placeholder={"내용"} onChange={onChangeContent} />
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
            <Button onClick={onCreate} styles={stylesButton} text={"작성"} />
          </div>
          <div className={styles.btnBox}>
            <Button onClick={onClose} styles={stylesButton} text={"취소"} />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default CreateModal;
