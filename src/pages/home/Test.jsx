import { useState } from "react";
import { questions } from "../../data/questions";
import { calculateMBTI, mbtiDescriptions } from "../../utils/calculateMBTI";
import QuestionCard from "../../components/commons/QuestionCard";
import ResultCard from "../../components/commons/ResultCard";
import { createTestResult } from "../../utils/jsonAPI";
import useAuthStore from "../../utils/auth/useAuthStore";
import { v4 as uuidv4 } from "uuid";

export default function MBTITest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const { user } = useAuthStore();

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

  async function whenMbtiTestEnd() {
    const dataToSave = {
      id: uuidv4(),
      title: result,
      test: user,
      time: new Date().toLocaleString("ko-KR"),
      description: mbtiDescriptions[result],
    };
    const response = await createTestResult("resultsTable", dataToSave);
    console.log(response);
  }

  function handleReset() {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  if (!!result) {
    whenMbtiTestEnd();
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
