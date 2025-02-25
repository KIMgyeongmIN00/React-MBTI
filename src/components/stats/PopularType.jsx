export default function PopularTypes({ results }) {
  if (!results?.length) return null;

  const mbtiCounts = results.reduce((acc, result) => {
    acc[result.mbti] = (acc[result.mbti] || 0) + 1;
    return acc;
  }, {});

  const sortedTypes = Object.entries(mbtiCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const total = results.length;

  return (
    <div className="space-y-4">
      {sortedTypes.map(([type, count], index) => (
        <div key={type} className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{type}</span>
              <span className="text-sm text-gray-500">
                {((count / total) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${(count / total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
