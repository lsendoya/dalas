import pkg from "react-icons/ai/index";
const { AiOutlineMinus, AiOutlinePlus } = pkg;
import type { TQuestion } from "../types/questions";

type SingleColQuestionProps = {
  questions: TQuestion[];
  checkedItems: boolean[];
  handleClicked: (index: number) => void;
};

const STYLE =
  "text-[--button] text-xl hover:text-purple-900 transform hover:scale-110 transition duration-300";

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
          className="flex flex-col w-full  gap-2 shadow-md bg-[#faf5ff] rounded-md transition-[background] duration-1000 ease-in-out hover:bg-[#ecd5ff]  hover:duration-1000 hover:ease-in "
        >
          <div className="w-full py-2  flex justify-around  gap-2 ">
            <p className="w-[80%] align-middle text-left text-[1rem] md:text-lg ">
              {question}
            </p>
            <button
              className="cursor-pointer"
              onClick={() => handleClicked(ind)}
            >
              {checkedItems[ind] ? (
                <AiOutlineMinus className={STYLE} />
              ) : (
                <AiOutlinePlus className={STYLE} />
              )}
            </button>
          </div>
          <p
            id={`answer-${ind}`}
            key={ind}
            className={`text-center  py-2 md:py-1  text-[0.8rem] md:text-md xl:text-xl ${
              checkedItems[ind]
                ? "block animate-[fadeInUp_0.6s_ease-in-out]"
                : "hidden"
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
