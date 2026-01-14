import * as React from "react";

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
    <input
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
    />
  );
};

export default InputBox;
