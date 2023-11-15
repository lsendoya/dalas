import SingleColQuestion from "./SingleColQuestion";
import { useQuestions } from "../hook/useQuestions";
import { questionsLeft, questionsRight } from "../utils/questions";

function Questions() {
  const {
    checkedItemsLeft,
    checkedItemsRight,
    handleClickedLeft,
    handleClickedRight,
  } = useQuestions();

  return (
    <ul className="flex justify-center flex-col w-full gap-6 md:gap-6 py-8 md:flex-row">
      <div className="flex flex-col w-full md:w-[48%] gap-4 ">
        <SingleColQuestion
          checkedItems={checkedItemsLeft}
          handleClicked={handleClickedLeft}
          questions={questionsLeft}
        />
      </div>
      <div className="flex flex-col w-full md:w-[48%] gap-4">
        <SingleColQuestion
          checkedItems={checkedItemsRight}
          handleClicked={handleClickedRight}
          questions={questionsRight}
        />
      </div>
    </ul>
  );
}

export default Questions;
