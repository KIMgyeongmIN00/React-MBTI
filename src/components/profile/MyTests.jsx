import { useState } from "react";
import { useEffect } from "react";
import { deleteTestResult, getFilterdResults } from "../../utils/jsonAPI";
import useAuthStore from "../../utils/auth/useAuthStore";
import BoardCard from "../commons/BoardCard";
import Swal from "sweetalert2";

export default function RecentTests() {
  const [myTest, setMyTest] = useState([]);
  const { user } = useAuthStore();

  useEffect(() => {
    async function getMyResults() {
      const myResults = await getFilterdResults(
        "resultsTable",
        "user.userId",
        user.userId
      );
      setMyTest(myResults);
    }

    getMyResults();
  }, []);

  async function handleDeleteResult(id) {
    Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "이 작업은 되돌릴 수 없습니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예, 삭제합니다!",
      cancelButtonText: "아니요, 삭제 안해요!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteTestResult("resultsTable", id);
        console.log("삭제 로직 실행", response);

        Swal.fire({
          title: "삭제 완료!",
          text: "항목이 삭제되었습니다.",
          icon: "success",
        });
      }
    });
  }

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">내 검사 결과 내역</h2>
        {myTest.length > 0 ? (
          <div className="space-y-4">
            {myTest.map((item) => (
              <BoardCard
                key={item.id}
                data={item}
                writeUser={item.user}
                onDelete={handleDeleteResult}
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
