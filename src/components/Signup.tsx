import InputBox from "./InputBox.tsx";
import useSignup from "../hooks/useSignup.tsx";
import Button from "./button/Button.tsx";
import buttonStyles from "./button/Button.module.css";

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
      <Button onClick={onBack} styles={buttonStyles} text={"취소"} />
      <Button onClick={onClick} styles={buttonStyles} text={"회원가입"} />
    </header>
  );
};

export default Signup;
