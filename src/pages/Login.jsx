import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../api/auth";
import { useEffect } from "react";
import useAuthStore from "../utils/auth/useAuthStore";
import Swal from "sweetalert2";

export default function Login() {
  const { saveUserInfomation } = useAuthStore();
  const [loginObj, setLoginObj] = useState({ id: "", password: "" });
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  async function onSubmitLoginHandler(loginObj) {
    // 리팩토링 예정
    try {
      const response = await login(loginObj);
      saveUserInfomation(response);
      Swal.fire({
        title: "환영합니다!",
        text: `${user.nickname}님 어서오세요!`,
        icon: "success",
      });
      const redirectTo = location.state?.from?.pathname || "/";
      navigate(redirectTo, { replace: true });
    } catch (error) {
      Swal.fire({
        title: "로그인 실패",
        text: `다시 시도 하세요`,
        icon: "error",
      });
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitLoginHandler(loginObj);
      }}
    >
      <p>아이디 :</p>
      <input
        className="border-4"
        type="text"
        onChange={(e) => {
          setLoginObj({ ...loginObj, id: e.target.value });
        }}
      />
      <p>비밀번호 :</p>
      <input
        className="border-4"
        type="text"
        onChange={(e) => {
          setLoginObj({ ...loginObj, password: e.target.value });
        }}
      />
      <br />
      <button className="border-8 border-black" type="submit">
        로그인 버튼
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입하기
      </button>
    </form>
  );
}
