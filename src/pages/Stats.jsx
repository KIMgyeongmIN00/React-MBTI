import { PieChart, Users } from "lucide-react";
import TypeDistribution from "../components/stats/TypeDistirbution";
import PopularTypes from "../components/stats/PopularType";
import { useMBTIResults } from "../utils/hooks/useGetResults";

export default function Statistics() {
  const { data: results, isLoading } = useMBTIResults();

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 max-w-6xl pb-20">
        <div className="space-y-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-md p-6 animate-pulse"
            >
              로딩 중...
              <div className="h-40 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl pb-20">
      <h1 className="text-2xl font-bold mb-6">MBTI 통계</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MBTI 유형 분포 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="h-5 w-5 text-gray-500" />
            <h2 className="text-xl font-semibold">MBTI 유형 분포</h2>
          </div>
          <TypeDistribution results={results} />
        </div>
        {/* 인기 있는 MBTI 유형 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-gray-500" />
            <h2 className="text-xl font-semibold">가장 많은 MBTI 유형</h2>
          </div>
          <PopularTypes results={results} />
        </div>
      </div>
    </div>
  );
}
