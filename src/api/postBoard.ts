import { api } from "../utils/api.ts";
import type { Category, CategoryAll } from "../types/Category.ts";

interface Props {
  title: string;
  content: string;
  category: Category | CategoryAll;
  file?: File | null;
}

const postBoard = async ({ title, content, category, file }: Props) => {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify({ title, content, category })], {
      type: "application/json",
    }),
  );

  if (file) formData.append("file", file);

  const res = await api.post("/boards", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export default postBoard;
