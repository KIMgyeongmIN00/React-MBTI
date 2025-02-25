import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../auth/useAuthStore";
import { getFilterdResults } from "../../api/jsonAPI";

export const useUserTestStats = () => {
  const { user } = useAuthStore();

  const { data: myResults = [], isLoading } = useQuery({
    queryKey: ["userResults", user.userId],
    queryFn: async () => {
      return getFilterdResults("resultsTable", "user.userId", user.userId);
    },
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터 유지
  });

  // 검사 횟수 계산
  const testCount = myResults.length;

  // 가장 많이 나온 MBTI 계산
  const mbtiCounts = myResults.reduce((acc, item) => {
    acc[item.mbti] = (acc[item.mbti] || 0) + 1;
    return acc;
  }, {});
  const mostFrequentMBTI =
    Object.entries(mbtiCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";

  return { testCount, mostFrequentMBTI, isLoading };
};
