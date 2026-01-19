import InputBox from "./InputBox.tsx";
import useSignup from "../hooks/useSignup.tsx";

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
    <header>
      register
      <InputBox
        placeholder={"이메일"}
        onChange={onChangeUsername}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <InputBox
        placeholder={"아이디"}
        onChange={onChangeName}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <InputBox
        placeholder={"비밀번호"}
        onChange={onChangePassword}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <InputBox
        placeholder={"비밀번호 재입력"}
        onChange={onChangeConfirmPassword}
        onKeyDown={onKeyDown}
        type={"input"}
      />
      <div>{errUsername}</div>
      <div>{errName}</div>
      <div>{errPassword}</div>
      <div>{errConfirmPassword}</div>
      <div>{errMsg}</div>
      <button onClick={onBack}>취소</button>
      <button onClick={onClick}>회원가입</button>
    </header>
  );
};

export default Signup;
