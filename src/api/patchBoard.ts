import { api } from "../utils/api.ts";
import type { Category, CategoryAll } from "../types/Category.ts";

interface Props {
  id: number;
  title: string;
  content: string;
  category: Category | CategoryAll;
  file?: File | null;
}

const patchBoard = async ({ id, title, content, category, file }: Props) => {
  const formData = new FormData();
  formData.append(
    "request",
    new Blob([JSON.stringify({ title, content, category })], {
      type: "application/json",
    }),
  );

  if (file) formData.append("file", file);

  const res = await api.patch(`/boards/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export default patchBoard;
