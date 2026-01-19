import InputBox from "./InputBox.tsx";
import useLogin from "../hooks/useLogin.tsx";
import Button from "./button/Button.tsx";
import stylesButton from "./button/Button.module.css";

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
    <header>
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
      <p>{errMsg}</p>
      <Button onClick={onSignup} styles={stylesButton} text={"회원가입"} />
      <Button onClick={onLogin} styles={stylesButton} text={"로그인"} />
    </header>
  );
};

export default Login;
