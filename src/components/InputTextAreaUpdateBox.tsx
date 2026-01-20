import * as React from "react";
import styles from "./InputTextAreaBox.module.css";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const InputTextAreaUpdateBox: React.FC<Props> = ({
  placeholder,
  onChange,
  value,
}) => {
  return (
    <main className={styles.container}>
      <label className={styles.label}>{placeholder}</label>
      <textarea className={styles.input} onChange={onChange} value={value} />
    </main>
  );
};

export default InputTextAreaUpdateBox;
