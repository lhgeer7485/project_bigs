import InputBox from "./InputBox.tsx";
import useRegister from "../hooks/useRegister.tsx";

const Register = () => {
  const {
    onChangeUsername,
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
    onKeyDown,
    errUsername,
    errName,
    errPassword,
    errConfirmPassword,
    errMsg,
  } = useRegister();
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
    </header>
  );
};

export default Register;
