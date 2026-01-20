import InputBox from "./InputBox.tsx";
import useLogin from "../hooks/useLogin.tsx";
import Button from "./button/Button.tsx";
import stylesButton from "./button/Button.module.css";
import styles from "./Login.module.css";

const Login = () => {
  const {
    onChangeLoginId,
    onChangeLoginPw,
    onKeyDown,
    onLogin,
    onSignup,
    errMsg,
  } = useLogin();

  return (
    <main className={styles.container}>
      <InputBox
        placeholder={"아이디"}
        onChange={onChangeLoginId}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <InputBox
        placeholder={"비밀번호"}
        onChange={onChangeLoginPw}
        onKeyDown={onKeyDown}
        type={"password"}
      />
      <p className={styles.msg}>{errMsg}</p>
      <div className={styles.box}>
        <Button onClick={onSignup} styles={stylesButton} text={"회원가입"} />
      </div>
      <div className={styles.box}>
        <Button onClick={onLogin} styles={stylesButton} text={"로그인"} />
      </div>
    </main>
  );
};

export default Login;
