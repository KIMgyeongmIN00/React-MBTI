import { User } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { getFilterdResults } from "../../utils/jsonAPI";
import useAuthStore from "../../utils/auth/useAuthStore";

export default function ProfileHeader() {
  const [mostFrequentMBTI, setMostFrequentMBTI] = useState(null);
  const [testCount, setTestCount] = useState(0);
  const { user } = useAuthStore();

  useEffect(() => {
    async function getMyResults() {
      const myResults = await getFilterdResults(
        "resultsTable",
        "user.userId",
        user.userId
      );
      if (myResults) {
        const history = myResults.length;
        setTestCount(history);
      }

      // 가장 많이 나온 MBTI 계산
      const mbtiCounts = myResults.reduce((acc, item) => {
        acc[item.mbti] = (acc[item.mbti] || 0) + 1;
        return acc;
      }, {});

      const mostFrequent = Object.entries(mbtiCounts).sort(
        (a, b) => b[1] - a[1]
      )[0];
      if (mostFrequent) {
        setMostFrequentMBTI(mostFrequent[0]);
      }
    }

    getMyResults();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5 text-gray-500" />
          <h2 className="text-xl font-semibold">내 프로필</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">총 검사 횟수</p>
            <p className="text-2xl font-bold">{testCount}회</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">가장 많이 나온 MBTI</p>
            <p className="text-2xl font-bold">{mostFrequentMBTI || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
