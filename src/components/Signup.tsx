import InputBox from "./input/InputBox.tsx";
import useSignup from "../hooks/useSignup.tsx";
import Button from "./button/Button.tsx";
import buttonStyles from "./button/Button.module.css";
import styles from "./Signup.module.css";

const Signup = () => {
  const {
    onChangeUsername,
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
    onKeyDown,
    onClick,
    onBack,
    errUsername,
    errName,
    errPassword,
    errConfirmPassword,
    errMsg,
  } = useSignup();
  return (
    <main className={styles.container}>
      <InputBox
        placeholder={"이메일"}
        onChange={onChangeUsername}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <div className={styles.msg}>{errUsername}</div>
      <InputBox
        placeholder={"아이디"}
        onChange={onChangeName}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <div className={styles.msg}>{errName}</div>
      <InputBox
        placeholder={"비밀번호"}
        onChange={onChangePassword}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <div className={styles.msg}>{errPassword}</div>
      <InputBox
        placeholder={"비밀번호 재입력"}
        onChange={onChangeConfirmPassword}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <div className={styles.msg}>{errConfirmPassword}</div>
      <div className={styles.msgResult}>{errMsg}</div>
      <div className={styles.box}>
        <Button onClick={onBack} styles={buttonStyles} text={"취소"} />
      </div>
      <div className={styles.box}>
        <Button onClick={onClick} styles={buttonStyles} text={"회원가입"} />
      </div>
    </main>
  );
};

export default Signup;
