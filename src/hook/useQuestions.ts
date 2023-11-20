import { useState } from "react";

export function useQuestions() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const handleClicked = (index: number) => {
    const toggleItems = [...checkedItems];
    const element = document.getElementById(`answer-${index}`);

    toggleItems[index] = !toggleItems[index];

    if (toggleItems[index]) {
      setCheckedItems(toggleItems);
    } else {
      element?.classList.add("animate-[fadeOutRight_0.6s_ease-in-out]");
      setTimeout(() => {
        setCheckedItems(toggleItems);

        element?.classList.add("hidden");
      }, 590);
    }
  };

  return {
    checkedItems,
    handleClicked,
  };
}
