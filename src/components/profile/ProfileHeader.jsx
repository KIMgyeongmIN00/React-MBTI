import { User } from "lucide-react";
import { useUserTestStats } from "../../utils/hooks/useUserTestStats";

export default function ProfileHeader() {
  const { testCount, mostFrequentMBTI, isLoading } = useUserTestStats();

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5 text-gray-500" />
          <h2 className="text-xl font-semibold">내 프로필</h2>
        </div>
        {isLoading ? (
          <p className="text-gray-500">로딩 중...</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">총 검사 횟수</p>
              <p className="text-2xl font-bold">{testCount}회</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">가장 많이 나온 MBTI</p>
              <p className="text-2xl font-bold">{mostFrequentMBTI}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
