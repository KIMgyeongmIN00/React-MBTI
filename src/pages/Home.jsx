import { useNavigate } from "react-router-dom";
// import ResultCard from "../components/commons/ResultCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="mb-8 border-[1px] border-black">
        <div>
          <h1 className="text-2xl text-center">MBTI 성격유형 검사</h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center mb-6 text-muted-foreground">
            20가지 질문을 통해 나의 MBTI 성격유형을 알아보세요!
          </p>
          <button
            size="lg"
            className="w-full border-black border-[2px] max-w-xs"
            onClick={() => navigate("/mbti")}
          >
            검사 시작하기
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-start text-xl font-semibold mb-4">
          이전 검사 결과
        </h2>
        {/* {서버에서 받아온 내 검사 내역 > 0 ? (
          history.map((item, index) => (
            <ResultCard
              key={index}
              result={item.result}
              date={item.date}
              description={item.description}
            />
          ))
        ) : ( */}
        <div className="border-[1px] border-black p-8">
          <p className="text-center text-muted-foreground">
            검사 내역이 없습니다
          </p>
        </div>
      </div>
    </div>
  );
}
