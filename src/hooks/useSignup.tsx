import * as React from "react";
import postSignup from "../api/postSignup.ts";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { regUsername, regName, regPassword } from "../utils/regex.ts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ZustandStore from "../stores/store.tsx";
import { useShallow } from "zustand/react/shallow";

const useSignup = () => {
  const [username, setUsername, name, setName, addUser] = ZustandStore(
    useShallow((state) => [
      state.username,
      state.setUsername,
      state.name,
      state.setName,
      state.addUser,
    ]),
  );
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

  const navigate = useNavigate();

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

  const signup = () => {
    const check =
      username &&
      name &&
      password &&
      confirmPassword &&
      !errUsername &&
      !errName &&
      !errPassword &&
      !errConfirmPassword;

    if (check) {
      mutation.mutate();
      addUser();
      navigate("/login");
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") signup();
  };

  const onClick = () => signup();

  const onBack = () => navigate(-1);

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
    onClick,
    onBack,
    errUsername,
    errName,
    errPassword,
    errConfirmPassword,
    errMsg,
  };
};

export default useSignup;
