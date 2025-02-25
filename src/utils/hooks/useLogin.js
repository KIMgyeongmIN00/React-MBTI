import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuthStore from '../auth/useAuthStore'
import { login } from '../../api/auth';

export const useLogin = () => {
  const { saveUserInformation } = useAuthStore();
  const [loginObj, setLoginObj] = useState({ id: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      saveUserInformation(response);
      Swal.fire({
        title: "환영합니다!",
        text: `${response.nickname}님 어서오세요!`,
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    },
    onError: () => {
      Swal.fire({
        title: "로그인 실패",
        text: `다시 시도 하세요`,
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
    },
  });

  const handleLogin = () => {
    mutation.mutate(loginObj);
  };

  return {
    loginObj,
    setLoginObj,
    handleLogin,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};