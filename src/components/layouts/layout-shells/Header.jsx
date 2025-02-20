import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-50">
      <div className="max-w-[900px] mx-auto px-4 h-full flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          MBTI 검사
        </Link>
        <button onClick={() => navigate("/login")}>로그인</button>
      </div>
    </header>
  );
}
