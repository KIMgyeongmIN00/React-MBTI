import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../utils/auth/useAuthStore";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin() {
    login(); // Zustand의 인증 상태 변경

    const redirectTo = location.state?.from?.pathname || "/";
    navigate(redirectTo, { replace: true });
  }

  return (
    <div>
      <h2>로그인 페이지</h2>
      <button onClick={handleLogin}>로그인 버튼</button>
    </div>
  );
}
