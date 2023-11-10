import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import type { TQuestion } from "../types/questions";

type SingleColQuestionProps = {
  questions: TQuestion[];
  checkedItems: boolean[];
  handleClicked: (index: number) => void;
};

function SingleColQuestion({
  checkedItems,
  handleClicked,
  questions,
}: SingleColQuestionProps) {
  return (
    <>
      {questions.map(({ question, answer }: TQuestion, ind: number) => (
        <div
          key={ind}
          className="flex flex-col w-full  items-center p-1 gap-1 shadow-md bg-[#F9F9F9] rounded-2xl"
        >
          <div className="w-full  flex items-center justify-center py-3 gap-2 ">
            <p className="w-[90%] h-8 md:h-8 md:py-2 align-middle text-center text-md md:text-lg ">
              {question}
            </p>
            <button
              className="cursor-pointer"
              onClick={() => handleClicked(ind)}
            >
              {checkedItems[ind] ? (
                <AiOutlineMinus className="text-purple-500 text-xl hover:text-purple-900 transform hover:scale-110 transition duration-300" />
              ) : (
                <AiOutlinePlus className="text-purple-500 text-xl hover:text-purple-900 transform hover:scale-110 transition duration-300" />
              )}
            </button>
          </div>
          <p
            key={ind}
            className={`text-center px-2  text-[1rem] ${
              checkedItems[ind] ? "block" : "hidden"
            }`}
          >
            {answer}
          </p>
        </div>
      ))}
    </>
  );
}

export default SingleColQuestion;
