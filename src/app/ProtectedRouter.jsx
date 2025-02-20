import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../utils/auth/useAuthStore";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { ONE_SECOND_BEFORE_GO_LOGIN_PAGE } from "../data/magic-numbers";

export default function ProtectedRouter() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        title: "로그인이 필요합니다!",
        text: "로그인 후 이용해주세요.",
        icon: "warning",
        confirmButtonText: "확인",
      }).then(
        setTimeout(() => {
          navigate("/login", { state: { from: location }, replace: true });
        }, ONE_SECOND_BEFORE_GO_LOGIN_PAGE)
      );
    }
  }, [isAuthenticated, navigate, location]);

  if (!isAuthenticated) return <div>로그인 페이지로 돌아갑니다.</div>; // 잠시 알람 창 뒤로 비쳐질 내용

  return <Outlet />; // 인증된 경우 자식 라우트 렌더링
}
