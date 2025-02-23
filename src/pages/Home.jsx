import { useNavigate } from "react-router-dom";
import mbti from "../data/mbtiList";
// import ResultCard from "../components/commons/ResultCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center mb-2">
            MBTI 성격유형 검사
          </h1>
          <p className="text-center text-gray-500">
            20가지 질문을 통해 나의 MBTI 성격유형을 알아보세요!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={() => {
              navigate("/mbti");
            }}
            className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            검사 시작하기
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">MBTI 유형</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 break-keep">
          {mbti.map(({ type, description }) => (
            <div
              key={type}
              className="bg-white rounded-lg shadow-sm p-4 hover:bg-gray-50 transition-colors cursor-pointer border"
            >
              <h3 className="font-semibold mb-1">{type}</h3>
              <p className="text-xs text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
