import { useState } from "react";
import type { Category, CategoryAll } from "../types/Category.ts";
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import postBoard from "../api/postBoard.ts";
import ZustandStore from "../stores/store.tsx";

interface Props {
  onClose: () => void;
}

const useCreate = ({ onClose }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Category | CategoryAll>("NOTICE");
  const [file, setFile] = useState<File | null>(null);
  const [msgTitle, setMsgTitle] = useState("");
  const [msgContent, setMsgContent] = useState("");

  const setPage = ZustandStore((state) => state.setPage);

  const validate = (data: string) => data.length >= 2;

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validate(value)) {
      setTitle(value);
      setMsgTitle("");
    } else {
      setMsgTitle("제목을 2글자 이상 입력해주세요.");
    }
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validate(value)) {
      setContent(value);
      setMsgContent("");
    } else {
      setMsgContent("내용을 2글자 이상 입력해주세요.");
    }
  };

  const onClickCategory = (category: Category | CategoryAll) =>
    setCategory(category);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setFile(files[0]);
  };

  const onCreate = () => {
    if (title && !msgTitle && content && !msgContent) {
      mutation.mutate();
      setPage(0);
      onClose();
    }
  };

  const mutation = useMutation({
    mutationFn: () => postBoard({ title, content, category, file }),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    onChangeTitle,
    onChangeContent,
    onChangeFile,
    onCreate,
    onClickCategory,
    msgTitle,
    msgContent,
    category,
  };
};

export default useCreate;
