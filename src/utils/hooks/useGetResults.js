import { useQuery } from "@tanstack/react-query";
import { getFilterdResults, getTestResults } from "../../api/jsonAPI";
import useAuthStore from "../auth/useAuthStore";

// 공개된 검사 결과 조회
export const usePublicResults = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["publicResults"],
    queryFn: () => getFilterdResults("resultsTable", "onPublic", true),
  });

  return { data, isLoading, error };
};

export const useMyResults = () => {
  const { user } = useAuthStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["myResults"],
    queryFn: () => getFilterdResults(
      "resultsTable",
      "user.userId",
      user.userId
    ),
  });

  return { data, isLoading, error };
};

// 모든 검사 결과 조회 (비공개 포함)
export function useMBTIResults() {
  return useQuery({
    queryKey: ["mbtiResults"],
    queryFn: () => getTestResults("resultsTable"),
  })
}