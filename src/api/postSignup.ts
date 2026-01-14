import api from "../utils/api.ts";

interface postSignupProps {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const postSignup = async ({
  username,
  name,
  password,
  confirmPassword,
}: postSignupProps) => {
  const res = await api.post("/auth/signup", {
    username: username,
    name: name,
    password: password,
    confirmPassword: confirmPassword,
  });
  console.log(res);
  return res.data;
};

export default postSignup;
