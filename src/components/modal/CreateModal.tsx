import styles from "./CreateModal.module.css";
import * as React from "react";
import useCreate from "../../hooks/useCreate.tsx";
import stylesButton from "../button/Button.module.css";
import Button from "../button/Button.tsx";
import CategoryBox from "../CategoryBox.tsx";
import type { Category } from "../../types/Category.ts";

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
        <input onChange={onChangeTitle}></input>
        <p>{msgTitle}</p>
        <input onChange={onChangeContent}></input>
        <p>{msgContent}</p>
        {/*<select onChange={onChangeCategory}>*/}
        {/*  <option value={"NOTICE"}>NOTICE</option>*/}
        {/*  <option value={"FREE"}>FREE</option>*/}
        {/*  <option value={"QNA"}>QNA</option>*/}
        {/*  <option value={"ETC"}>ETC</option>*/}
        {/*</select>*/}
        <CategoryBox
          value={category}
          onClickCategory={onClickCategory}
          categories={CATEGORIES}
        />
        <input type="file" onChange={onChangeFile}></input>
        <Button onClick={onCreate} styles={stylesButton} text={"확인"} />
        <Button onClick={onClose} styles={stylesButton} text={"취소"} />
      </div>
    </main>
  );
};

export default CreateModal;
