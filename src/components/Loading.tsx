import styles from "./Loading.module.css";
import { useIsMutating } from "@tanstack/react-query";

const Loading = () => {
  const isMutating = useIsMutating();

  if (isMutating === 0) return null;

  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <p className={styles.text}>로딩 중...</p>
    </div>
  );
};

export default Loading;
