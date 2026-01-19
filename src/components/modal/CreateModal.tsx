import styles from "./CreateModal.module.css";
import * as React from "react";
import useCreate from "../../hooks/useCreate.tsx";
import stylesButton from "../button/Button.module.css";
import Button from "../button/Button.tsx";

interface Props {
  onClose: () => void;
}

const CreateModal: React.FC<Props> = ({ onClose }) => {
  const {
    onChangeTitle,
    onChangeContent,
    onChangeCategory,
    onChangeFile,
    onCreate,
    msgTitle,
    msgContent,
  } = useCreate({ onClose });

  return (
    <main className={styles.container} onClick={onClose}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <input onChange={onChangeTitle}></input>
        <p>{msgTitle}</p>
        <input onChange={onChangeContent}></input>
        <p>{msgContent}</p>
        <select onChange={onChangeCategory}>
          <option value={"NOTICE"}>NOTICE</option>
          <option value={"FREE"}>FREE</option>
          <option value={"QNA"}>QNA</option>
          <option value={"ETC"}>ETC</option>
        </select>
        <input type="file" onChange={onChangeFile}></input>
        <Button onClick={onCreate} styles={stylesButton} text={"확인"} />
        <Button onClick={onClose} styles={stylesButton} text={"취소"} />
      </div>
    </main>
  );
};

export default CreateModal;
