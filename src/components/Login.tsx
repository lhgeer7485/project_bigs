import InputBox from "./InputBox.tsx";
import useLogin from "../hooks/useLogin.tsx";

const Login = () => {
  const { onChangeLoginId, onChangeLoginPw, onKeyDown } = useLogin();

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
    </header>
  );
};

export default Login;
