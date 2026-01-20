import * as React from "react";
import styles from "./InputBox.module.css";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputUpdateBox: React.FC<Props> = ({ placeholder, onChange, value }) => {
  return (
    <main className={styles.container}>
      <label className={styles.label}>{placeholder}</label>
      <input className={styles.input} onChange={onChange} value={value} />
    </main>
  );
};

export default InputUpdateBox;
