import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth";
import useAuthStore from "../utils/auth/useAuthStore";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import Input from "../components/commons/Input";
import Buttons from "../components/commons/Buttons";

export default function Login() {
  const { saveUserInfomation } = useAuthStore();
  const [loginObj, setLoginObj] = useState({ id: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();

  const mutation = useMutation({
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
        text: `다시 시도 하세요`,
        icon: "error",
      });
    },
  });

  return (
    <div className="min-h-screen flex justify-center bg-gray-50">
      <div className="w-full h-fit max-w-md m-16 p-6 shadow-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold">로그인</h1>
          <p className="mt-2 text-sm text-gray-600">
            MBTI 테스트를 시작하려면 로그인해주세요
          </p>
        </div>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            mutation.mutate(loginObj);
          }}
        >
          <Input
            label={"아이디"}
            type={"text"}
            logic={(e) => setLoginObj({ ...loginObj, id: e.target.value })}
          />
          <Input
            label={"비밀번호"}
            type={"password"}
            logic={(e) =>
              setLoginObj({ ...loginObj, password: e.target.value })
            }
          />
          <Buttons label={"로그인"} type={"submit"} mutation={mutation} />
          <button type="button" onClick={() => navigate("/signup")}>
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
}
