import styles from "./CreateModal.module.css";
import * as React from "react";
import useCreate from "../../hooks/useCreate.tsx";

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
        <button onClick={onCreate}>확인</button>
        <button onClick={onClose}>취소</button>
      </div>
    </main>
  );
};

export default CreateModal;
