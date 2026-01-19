import { unAuthApi } from "../utils/api.ts";
import type Login from "../types/Login.ts";

interface postLoginProps {
  loginId: string;
  loginPw: string;
}

const postLogin = async ({
  loginId,
  loginPw,
}: postLoginProps): Promise<Login> => {
  const res = await unAuthApi.post("/auth/signin", {
    username: loginId,
    password: loginPw,
  });
  return res.data;
};
export default postLogin;
