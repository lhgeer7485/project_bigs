import { useState } from "react";
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import postLogin from "../api/postLogin.ts";
import { setAccessToken, setRefreshToken } from "../utils/api.ts";

const useLogin = () => {
  const [loginId, setLoginId] = useState<string>("");
  const [loginPw, setLoginPw] = useState<string>("");

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

  const mutation = useMutation({
    mutationFn: () => postLogin({ loginId, loginPw }),
    onSuccess: (data) => {
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
    },
    onError: () => {
      console.log("error");
    },
  });

  return { onChangeLoginId, onChangeLoginPw, onKeyDown };
};
export default useLogin;
