import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../../utils/auth/useAuthStore";
import Swal from "sweetalert2";

export default function Header() {
  const { user, isAuthenticated, wasteUserInformation } = useAuthStore();
  const navigate = useNavigate();

  function handleLogout() {
    window.stop(); // 인증 검사 로직 정지

    Swal.fire({
      title: "로그아웃 되었습니다!",
      text: `${user.nickname}님 안녕히 가세요!`,
      icon: "success",
    }).then(() => {
      wasteUserInformation();
      navigate("/");
    });
  }

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[900px] mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          MBTI 검사
        </Link>
        {isAuthenticated ? (
          <button onClick={() => handleLogout()}>로그아웃</button>
        ) : (
          <button onClick={() => navigate("/login")}>로그인</button>
        )}
      </div>
    </header>
  );
}
