import type { Category } from "./Category.ts";

export interface Board {
  id: number;
  title: string;
  content: string;
  boardCategory: Category;
  imageUrl: string;
  createdAt: string;
}
