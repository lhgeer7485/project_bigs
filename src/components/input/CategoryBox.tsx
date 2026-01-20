import styles from "./CategoryBox.module.css";
import * as React from "react";
import type { Category, CategoryAll } from "../../types/Category.ts";
import useCategoryBox from "../../hooks/useCategoryBox.tsx";

interface Props {
  value: Category | CategoryAll;
  onClickCategory: (category: Category | CategoryAll) => void;
  categories: Category[] | CategoryAll[];
}

const CategoryBox: React.FC<Props> = ({
  value,
  onClickCategory,
  categories,
}) => {
  const { isOpen, onClick } = useCategoryBox();

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={onClick}>
        {value}
        <span className={styles.arrow} />
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => {
                onClickCategory(category);
                onClick();
              }}
              className={`${styles.item} ${
                value === category ? styles.active : ""
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryBox;
