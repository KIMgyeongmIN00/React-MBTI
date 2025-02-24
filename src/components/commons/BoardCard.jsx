import { Calendar, User2 } from "lucide-react";
import useAuthStore from "../../utils/auth/useAuthStore";

export default function BoardCard({ description, mbti, writeUser, time }) {
  const { user } = useAuthStore();

  // MBTI 유형별 색상 매핑
  const getTypeColor = (mbti) => {
    const colors = {
      E: "bg-red-100 text-red-800",
      I: "bg-blue-100 text-blue-800",
      S: "bg-green-100 text-green-800",
      N: "bg-purple-100 text-purple-800",
      T: "bg-yellow-100 text-yellow-800",
      F: "bg-pink-100 text-pink-800",
      J: "bg-indigo-100 text-indigo-800",
      P: "bg-orange-100 text-orange-800",
    };
    return colors[mbti] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="w-full p-4 border-2">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {mbti.split("").map((mbti, index) => (
              <span
                key={index}
                className={`w-8 p-2 rounded-full text-sm font-semibold ${getTypeColor(
                  mbti
                )}`}
              >
                {mbti}
              </span>
            ))}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {time}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <User2 className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-lg">{mbti} 유형</h3>
          </div>
          {writeUser.userId === user.userId && (
            <div className="gap-2">
              <button className="border-2 text-sm text-red-500 hover:text-red-700 transition-colors">
                삭제
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow transition-all duration-300 scrollbar-none max-h-24 overflow-hidden hover:max-h-[500px] hover:scrollbar-none">
        <p className="text-gray-700 break-keep leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
