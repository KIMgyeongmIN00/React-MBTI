import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../auth/useAuthStore";
import { calculateMBTI, mbtiDescriptions } from "../mbti/calculateMBTI";
import { createTestResult } from "../../api/jsonAPI";
import { questions } from "../../data/questions";
import Swal from "sweetalert2";

export const useMBTITest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const { user } = useAuthStore();

  const mutation = useMutation({
    mutationFn: async (mbtiResult) => {
      const dataToSave = {
        mbti: mbtiResult,
        user: user,
        time: new Date().toLocaleString("ko-KR"),
        description: mbtiDescriptions[mbtiResult],
        onPublic: true,
      };
      return createTestResult("resultsTable", dataToSave);
    },
    onSuccess: () => {
      Swal.fire({
        title: "수고하셨습니다.",
        text: "모든 검사를 마치셨습니다.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      })
    },
    onError: () => {
      Swal.fire({
        title: "죄송합니다.",
        text: "모종의 이유로 검사에 실패 하였습니다.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
      })
    },
  });

  function handleAnswer(answer, type) {
    const newAnswers = [...answers, { type, answer }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const mbtiResult = calculateMBTI(newAnswers);
      setResult(mbtiResult);
      mutation.mutate(mbtiResult); // MBTI 결과 저장
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  }

  return {
    currentQuestion,
    answers,
    result,
    handleAnswer,
    handleReset,
  };
};
