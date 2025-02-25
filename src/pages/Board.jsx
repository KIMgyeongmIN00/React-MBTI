import BoardCard from "../components/commons/BoardCard";
import { usePublicResults } from "../utils/hooks/useGetResults";
import { useDeleteMutation } from "../utils/hooks/useDeleteCard";

export default function Board() {
  const { data: list, isLoading, error } = usePublicResults();
  const { handleDelete } = useDeleteMutation();

  if (isLoading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;
  return (
    <div className="container grid mx-auto p-4 gap-y-6 max-w-2xl pb-20">
      {list.length ? (
        list.map((item) => {
          return (
            <BoardCard
              key={item.id}
              data={item}
              writeUser={item.user}
              onDelete={handleDelete}
              canToggle={false}
            />
          );
        })
      ) : (
        <div className="w-full h-24 content-center font-bold bg-white rounded-lg shadow-md">
          공개된 검사 결과가 없습니다!
        </div>
      )}
    </div>
  );
}
