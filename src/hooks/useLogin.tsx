import { useState } from "react";
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import postLogin from "../api/postLogin.ts";
import ZustandStore from "../stores/store.tsx";
import { useShallow } from "zustand/react/shallow";
import axios from "axios";
import type Login from "../types/Login.ts";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loginId, setLoginId] = useState<string>("");
  const [loginPw, setLoginPw] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  const navigate = useNavigate();

  const [
    setAccessToken,
    setRefreshToken,
    setLoginUsername,
    setLoginName,
    getLoginName,
  ] = ZustandStore(
    useShallow((state) => [
      state.setAccessToken,
      state.setRefreshToken,
      state.setLoginUsername,
      state.setLoginName,
      state.getLoginName,
    ]),
  );

  const onChangeLoginId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLoginId(value);
  };

  const onChangeLoginPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLoginPw(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") mutation.mutate();
  };

  const onSignup = () => navigate("/signup");
  const onLogin = () => mutation.mutate();

  const mutation = useMutation<Login>({
    mutationFn: () => postLogin({ loginId, loginPw }),
    onSuccess: (data) => {
      setLoginUsername(loginId);
      setLoginName(getLoginName());
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      navigate("/");
      setErrMsg("");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrMsg(error.response.data.message);
        }
      }
    },
  });

  return {
    onChangeLoginId,
    onChangeLoginPw,
    onKeyDown,
    onLogin,
    onSignup,
    errMsg,
  };
};
export default useLogin;
