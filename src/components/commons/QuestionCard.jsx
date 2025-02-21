export default function QuestionCard({
  question,
  currentNumber,
  totalQuestions,
  onAnswer,
}) {
  const currentPercent = (currentNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div>
        <h1 className="text-xl font-bold">MBTI 테스트</h1>
        <p>
          질문 {currentNumber} / {totalQuestions}
        </p>
        <progress max="100" value={currentPercent} className="w-full" />
      </div>
      <div>
        <h2 className="text-xl mb-6">{question.question}</h2>
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full p-6 text-lg border-[2px] transition-colors cursor-pointer"
              onClick={() => {
                onAnswer(
                  index === 0
                    ? question.type.split("/")[0]
                    : question.type.split("/")[1],
                  question.type
                );
                console.log(
                  index === 0
                    ? question.type.split("/")[0]
                    : question.type.split("/")[1],
                  question.type
                );
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
