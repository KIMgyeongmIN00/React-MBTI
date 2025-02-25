import { questions } from "../../data/questions";
import { mbtiDescriptions } from "../../utils/mbti/calculateMBTI";
import { useMBTITest } from "../../utils/hooks/useSaveMbtiResults";
import QuestionCard from "../../components/mbti-test/QuestionCard";
import ResultCard from "../../components/mbti-test/ResultCard";

export default function MBTITest() {
  const { currentQuestion, result, handleAnswer, handleReset } = useMBTITest();

  if (!!result) {
    return (
      <ResultCard
        result={result}
        description={mbtiDescriptions[result]}
        onReset={handleReset}
      />
    );
  }

  return (
    <QuestionCard
      question={questions[currentQuestion]}
      currentNumber={currentQuestion + 1}
      totalQuestions={questions.length}
      onAnswer={handleAnswer}
    />
  );
}
