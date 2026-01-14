import * as React from "react";
import postSignup from "../api/postSignup.ts";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { regUsername, regName, regPassword } from "../utils/regex.ts";
import axios from "axios";

const useRegister = () => {
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [errUsername, setErrUserName] = useState<string>("");
  const [errName, setErrName] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");
  const [errConfirmPassword, setErrConfirmPassword] = useState<string>("");

  const [errMsg, setErrMsg] = useState<string>("");

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    setErrUserName(
      regUsername.test(value) ? "" : "이메일 형식으로 입력해주세요",
    );
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
    setErrName(regName.test(value) ? "" : "이름을 제대로 입력해주세요");
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setErrPassword(
      regPassword.test(value)
        ? ""
        : "8자 이상, 숫자, 영문자, 특수문자(!%+#?&)를 포함해주세요",
    );
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setErrConfirmPassword(
      password === value ? "" : "비밀번호가 일치하지 않습니다.",
    );
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const check =
        username &&
        name &&
        password &&
        confirmPassword &&
        !errUsername &&
        !errName &&
        !errPassword &&
        !errConfirmPassword;

      if (check) mutation.mutate();
    }
  };

  const mutation = useMutation({
    mutationFn: () => postSignup({ username, name, password, confirmPassword }),
    onSuccess: () => {
      setErrMsg("");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) setErrMsg(error.response.data.username[0]);
      }
    },
  });

  return {
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
  };
};

export default useRegister;
