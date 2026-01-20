import { useState } from "react";

const useCategoryBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(!isOpen);

  return { isOpen, onClick };
};

export default useCategoryBox;
