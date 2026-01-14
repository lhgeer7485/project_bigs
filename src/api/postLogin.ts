import api from "../utils/api.ts";

interface postLoginProps {
  loginId: string;
  loginPw: string;
}

const postLogin = async ({ loginId, loginPw }: postLoginProps) => {
  const res = await api.post("/auth/signin", {
    username: loginId,
    password: loginPw,
  });
  return res.data;
};
export default postLogin;
