import { useEffect, useState } from "react";
import type { Category, CategoryAll } from "../types/Category.ts";
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import patchBoard from "../api/patchBoard.ts";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  onClose: () => void;
  prevData: prevData;
}

interface prevData {
  title: string;
  content: string;
  category: Category;
}

const UseUpdate = ({ id, onClose, prevData }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Category | CategoryAll>("NOTICE");
  const [file, setFile] = useState<File | null>(null);
  const [msgTitle, setMsgTitle] = useState("");
  const [msgContent, setMsgContent] = useState("");

  const validate = (data: string) => data.length >= 2;
  const navigate = useNavigate();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (validate(value)) {
      setMsgTitle("");
    } else {
      setMsgTitle("제목을 2글자 이상 입력해주세요.");
    }
    setTitle(value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (validate(value)) {
      setMsgContent("");
    } else {
      setMsgContent("내용을 2글자 이상 입력해주세요.");
    }
    setContent(value);
  };

  const onClickCategory = (category: Category | CategoryAll) =>
    setCategory(category);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files[0]) setFile(files[0]);
  };

  const onUpdate = () => {
    if (title && !msgTitle && content && !msgContent) {
      mutation.mutate();
    }
  };

  const mutation = useMutation({
    mutationFn: () => patchBoard({ id, title, content, category, file }),
    onSuccess: () => {
      navigate("/");
      onClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    setTitle(prevData.title);
    setContent(prevData.content);
    setCategory(prevData.category);
  }, []);

  return {
    title,
    content,
    category,
    msgTitle,
    msgContent,
    onChangeTitle,
    onChangeContent,
    onChangeFile,
    onUpdate,
    onClickCategory,
  };
};

export default UseUpdate;
