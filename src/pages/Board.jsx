import { useState } from "react";
import BoardCard from "../components/commons/BoardCard";
import { deleteTestResult, getFilterdResults } from "../utils/jsonAPI";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Board() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getPublicList() {
      const response = await getFilterdResults(
        "resultsTable",
        "onPublic",
        true
      );
      setList([...response]);
    }

    getPublicList();
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
    <div className="container grid mx-auto p-4 gap-y-6 max-w-2xl pb-20">
      {list.length !== 0 ? (
        list.map((item) => {
          return (
            <BoardCard
              key={item.id}
              data={item}
              writeUser={item.user}
              onDelete={handleDeleteResult}
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
