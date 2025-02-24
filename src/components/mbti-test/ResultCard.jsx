import { User } from "lucide-react";
import useAuthStore from "../../utils/auth/useAuthStore";

export default function ResultCard({ result, description, onReset }) {
  const { user } = useAuthStore();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="justify-center text-center text-4xl">
        <div className="justify-self-center">
          <User size={150} />
        </div>
        <p>{user.nickname}</p>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold text-center">
          당신의 MBTI는 {result}입니다!
        </h1>
      </div>
      <div className="mt-4">
        <p className="text-lg break-keep whitespace-pre-line">{description}</p>
      </div>
      <div>
        <button
          onClick={onReset}
          className="w-full mt-4 border-[3px] cursor-pointer"
        >
          다시 테스트하기
        </button>
      </div>
    </div>
  );
}
