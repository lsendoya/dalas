import { useState } from "react";

export function useQuestions() {
  const [checkedItemsLeft, setCheckedItemsLeft] = useState<boolean[]>([]);
  const [checkedItemsRight, setCheckedItemsRight] = useState<boolean[]>([]);

  const handleClickedLeft = (index: number) => {
    const toggleItems = [...checkedItemsLeft];
    toggleItems[index] = !toggleItems[index];
    setCheckedItemsLeft(toggleItems);
  };
  const handleClickedRight = (index: number) => {
    const toggleItems = [...checkedItemsRight];
    toggleItems[index] = !toggleItems[index];
    setCheckedItemsRight(toggleItems);
  };

  return {
    checkedItemsLeft,
    checkedItemsRight,
    handleClickedLeft,
    handleClickedRight,
  };
}
