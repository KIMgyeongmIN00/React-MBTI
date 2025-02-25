import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { updateTestResultPublic } from "../../api/jsonAPI";

export const useTogglePublic = () => {
  const mutation = useMutation({
    mutationFn: async ({ id, onPublic }) => {
      return updateTestResultPublic("resultsTable", id, { onPublic });
    },
    onSuccess: (_, { onPublic }) => {
      Swal.fire({
        title: onPublic ? "공개 되었습니다!" : "비공개 되었습니다!",
        text: onPublic
          ? "이 검사 결과를 공개하였습니다!"
          : "이 검사 결과를 비공개하였습니다!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    },
    onError: () => {
      Swal.fire({
        title: "오류 발생",
        text: "다시 시도해주세요!",
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
    },
  });

  const togglePublic = (id, isChecked) => {
    mutation.mutate({ id, onPublic: isChecked });
  };

  return { togglePublic };
};
