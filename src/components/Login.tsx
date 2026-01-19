import InputBox from "./InputBox.tsx";
import useLogin from "../hooks/useLogin.tsx";

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
      <button onClick={onSignup}>회원가입</button>
      <button onClick={onLogin}>로그인</button>
    </header>
  );
};

export default Login;
