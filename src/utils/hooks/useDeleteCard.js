import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteTestResult } from "../../api/jsonAPI";

export const useDeleteMutation = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const response = await deleteTestResult("resultsTable", id);
      console.log("삭제 로직 실행", response);
      return response;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["publicResults"] });
      await queryClient.invalidateQueries({ queryKey: ["myResults"] });
      Swal.fire({
        title: "삭제 완료!",
        text: "항목이 삭제되었습니다.",
        icon: "success",
      });
    },
    onError: async () => {
      Swal.fire({
        title: "삭제 실패!",
        text: "항목을 삭제하는 중 문제가 발생했습니다.",
        icon: "error",
      });
    },
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "정말 삭제하시겠습니까?",
      text: "이 작업은 되돌릴 수 없습니다!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "예, 삭제합니다!",
      cancelButtonText: "아니요, 삭제 안해요!",
    });

    if (result.isConfirmed) {
      deleteMutation.mutate(id);
    } else {
      Swal.fire({
        title: "삭제 취소!",
        text: "항목 삭제를 취소하였습니다.",
        icon: "info",
      });
    }
  };

  return { handleDelete, ...deleteMutation };
};
