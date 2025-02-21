import { useState } from "react";
import { questions } from "../../data/questions";
import { calculateMBTI, mbtiDescriptions } from "../../utils/calculateMBTI";
import QuestionCard from "../../components/commons/QuestionCard";
import ResultCard from "../../components/commons/ResultCard";

export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  function handleAnswer(answer, type) {
    const newAnswers = [...answers, { type, answer }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mbtiResult = calculateMBTI(newAnswers);
      setResult(mbtiResult);
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

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
