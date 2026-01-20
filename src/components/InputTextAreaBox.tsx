import * as React from "react";
import styles from "./InputTextAreaBox.module.css";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputTextAreaBox: React.FC<Props> = ({ placeholder, onChange }) => {
  return (
    <main className={styles.container}>
      <label className={styles.label}>{placeholder}</label>
      <textarea className={styles.input} onChange={onChange} />
    </main>
  );
};

export default InputTextAreaBox;
