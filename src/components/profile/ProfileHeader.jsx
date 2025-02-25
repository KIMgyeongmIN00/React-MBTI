import { User } from "lucide-react";
import { useUserTestStats } from "../../utils/hooks/useUserTestStats";
import useAuthStore from "../../utils/auth/useAuthStore";
import { useEditNickname } from "../../utils/hooks/useEditNickname";

export default function ProfileHeader() {
  const { testCount, mostFrequentMBTI, isLoading } = useUserTestStats();
  const { user, saveUserInformation } = useAuthStore();
  const {
    isEditing,
    newName,
    isSaving,
    setNewName,
    handleEdit,
    handleSave,
    handleCancel,
  } = useEditNickname(user, saveUserInformation);

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="h-5 w-5 text-gray-500" />
          {isEditing ? (
            <div className="flex-1 flex items-center gap-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="flex-1 px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="닉네임을 입력하세요"
                disabled={isSaving}
              />
              <button
                onClick={handleSave}
                disabled={isSaving || !newName.trim()}
                className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? "저장 중..." : "저장"}
              </button>
              <button
                onClick={handleCancel}
                disabled={isSaving}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                취소
              </button>
            </div>
          ) : (
            <div className="flex-1 flex items-center gap-2">
              <h2 className="text-xl font-semibold">
                {user?.nickname || "사용자"} 님의 프로필
              </h2>
              <button
                onClick={handleEdit}
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                수정
              </button>
            </div>
          )}
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
