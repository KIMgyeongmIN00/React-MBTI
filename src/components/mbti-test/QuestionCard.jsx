export default function QuestionCard({
  question,
  currentNumber,
  totalQuestions,
  onAnswer,
}) {
  const currentPercent = (currentNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold mb-2">MBTI 테스트</h2>
        <p className="text-sm text-gray-500 mb-4">
          질문 {currentNumber} / {totalQuestions}
        </p>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${currentPercent}%` }}
          />
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl mb-6">{question.question}</h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              className="w-full p-6 text-lg border rounded-lg hover:bg-gray-50 transition-colors text-left"
              onClick={() => {
                onAnswer(
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
