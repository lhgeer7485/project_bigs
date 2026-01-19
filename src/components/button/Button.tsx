import * as React from "react";

interface Props {
  onClick: () => void;
  styles: Record<string, string>;
  text: string;
}

const Button: React.FC<Props> = ({ onClick, styles, text }) => {
  return (
    <main onClick={onClick} className={styles.container}>
      {text}
    </main>
  );
};

export default Button;
