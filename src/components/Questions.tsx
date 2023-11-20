import SingleColQuestion from "./SingleColQuestion";
import { useQuestions } from "../hook/useQuestions";
import { questions } from "../utils/questions";

function Questions() {
  const { checkedItems, handleClicked } = useQuestions();

  return (
    <article className="flex w-full justify-center items-center p-2">
      <div className="w-full p-2 gap-10 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-2xl md:text-4xl font-bold">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-center text-md font-normal md:text-xl">
            No dudes en consultarnos si necesitas más información
          </p>
        </div>
        <div className="grid w-full  md:w-[80%] gap-4 ">
          <SingleColQuestion
            checkedItems={checkedItems}
            handleClicked={handleClicked}
            questions={questions}
          />
        </div>
      </div>
    </article>
  );
}

export default Questions;
