import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { register } from '../../api/auth';

export const useRegister = () => {
  const [regObj, setRegObj] = useState({
    id: "",
    password: "",
    nickname: ""
  });
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      Swal.fire({
        title: `${response.message}!`,
        text: "성공적으로 회원가입이 되었습니다! 로그인을 해주세요.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      navigate("/login");
    },
    onError: () => {
      console.log();
      Swal.fire({
        title: "회원가입 실패...",
        text: `회원가입에 실패했습니다. 다시 시도해 주세요.`,
        icon: "error",
        confirmButtonColor: "#3085d6",
      });
    },
  });

  const handleRegister = () => {
    mutation.mutate(regObj);
  };

  return {
    regObj,
    setRegObj,
    handleRegister,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};