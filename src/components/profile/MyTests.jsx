import { useDeleteMutation } from "../../utils/hooks/useDeleteCard";
import { useMyResults } from "../../utils/hooks/useGetResults";
import BoardCard from "../commons/BoardCard";

export default function RecentTests() {
  const { data: list, isLoading, error } = useMyResults();
  const { handleDelete } = useDeleteMutation();

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">내 검사 결과 내역</h2>
        {list.length > 0 ? (
          <div className="space-y-4">
            {list.map((item) => (
              <BoardCard
                key={item.id}
                data={item}
                writeUser={item.user}
                onDelete={handleDelete}
                canToggle={true}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-4">검사 내역이 없습니다</p>
        )}
      </div>
    </div>
  );
}
