import * as React from "react";
import styles from "./InputBox.module.css";

interface InputBoxProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type: "input" | "password";
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  onChange,
  onKeyDown,
  type,
}) => {
  return (
    <main className={styles.container}>
      <label className={styles.label}>{placeholder}</label>
      <input
        className={styles.input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
      />
    </main>
  );
};

export default InputBox;
