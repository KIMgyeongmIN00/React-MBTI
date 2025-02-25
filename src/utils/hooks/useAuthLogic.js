import { useMutation } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../../api/auth";
import useAuthStore from "../auth/useAuthStore";

export const useLogin = () => {
  const { saveUserInfomation } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      saveUserInfomation(response);
      Swal.fire({
        title: "환영합니다!",
        text: `${response.nickname}님 어서오세요!`,
        icon: "success",
      });
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    },
    onError: () => {
      Swal.fire({
        title: "로그인 실패",
        text: "다시 시도 하세요",
        icon: "error",
      });
    },
  });
};