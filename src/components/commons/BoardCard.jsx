import { Calendar, User2 } from "lucide-react";
import useAuthStore from "../../utils/auth/useAuthStore";
import Toggle from "./Toggle";
import { updateTestResultPublic } from "../../utils/jsonAPI";
import Swal from "sweetalert2";

export default function BoardCard({ data, writeUser, onDelete }) {
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

  async function onPublicOn(id) {
    const response = await updateTestResultPublic("resultsTable", id, {
      onPublic: true,
    });
    Swal.fire({
      title: "공개 되었습니다!",
      text: "이 검사 결과를 공개하였습니다!",
      icon: "success",
    });
  }

  async function onPublicOff(id) {
    const response = await updateTestResultPublic("resultsTable", id, {
      onPublic: false,
    });
    Swal.fire({
      title: "비공개 되었습니다!",
      text: "이 검사 결과를 비공개하였습니다!",
      icon: "success",
    });
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="flex gap-1">
            {data.mbti.split("").map((mbti, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-md text-sm font-semibold ${getTypeColor(
                  mbti
                )}`}
              >
                {mbti}
              </span>
            ))}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {data.time}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <User2 className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-semibold text-lg">{writeUser.userId}</h3>
          </div>
          {writeUser.userId === user.userId && (
            <div className="text-sm text-red-500 hover:text-red-700 transition-colors">
              <button
                onClick={() => {
                  onDelete(data.id);
                }}
              >
                삭제
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg shadow transition-all duration-300 scrollbar-none max-h-24 overflow-hidden hover:max-h-[500px] hover:scrollbar-none">
        <p className="text-gray-700 break-keep leading-relaxed">
          {data.description}
        </p>
      </div>

      {writeUser.userId === user.userId && (
        <div className="flex p-2 gap-2 justify-end">
          <span className="text-sm text-gray-500">비공개</span>
          <Toggle
            defaultChecked={data.onPublic}
            onToggle={(isChecked) => {
              if (isChecked) {
                onPublicOn(data.id);
              } else {
                onPublicOff(data.id);
              }
            }}
            size="small"
          />
          <span className="text-sm text-gray-500">공개</span>
        </div>
      )}
    </div>
  );
}
