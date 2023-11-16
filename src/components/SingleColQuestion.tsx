import pkg from 'react-icons/ai/index';
const { AiOutlineMinus, AiOutlinePlus } = pkg;
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
          onClick={() => handleClicked(ind)}
          key={ind}
          className="flex flex-col w-full  items-center px-3 py-2 gap-1 shadow-md bg-[#f5e8ff] rounded-2xl"
        >
          <div className="w-full  flex items-center justify-center py-3 gap-2 ">
            <p className="w-[90%]  md:h-10 md:py-1 align-middle text-center text-md md:text-lg ">
              {question}
            </p>
            <button
              className="cursor-pointer"
              onClick={() => handleClicked(ind)}
            >
              {checkedItems[ind] ? (
                <AiOutlineMinus className="text-[--button] text-xl hover:text-purple-900 transform hover:scale-110 transition duration-300" />
              ) : (
                <AiOutlinePlus className="text-[--button] text-xl hover:text-purple-900 transform hover:scale-110 transition duration-300" />
              )}
            </button>
          </div>
          <p
            key={ind}
            className={`text-center mt-2 px-2  text-[1rem] ${
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
