import { BarChart2, LayoutList, HomeIcon, User } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigate() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-[900px] mx-auto px-4">
        <ul className="flex justify-around py-2">
          <li>
            <Link
              to="/"
              className={`flex flex-col items-center ${
                isActive("/") ? "text-blue-500" : "text-gray-600"
              }`}
            >
              <HomeIcon size={20} />
              <span className="text-xs mt-1">홈</span>
            </Link>
          </li>
          <li>
            <Link
              to="/board"
              className={`flex flex-col items-center ${
                isActive("/board") ? "text-blue-500" : "text-gray-600"
              }`}
            >
              <LayoutList size={20} />
              <span className="text-xs mt-1">게시판</span>
            </Link>
          </li>
          <li>
            <Link
              to="/stats"
              className={`flex flex-col items-center ${
                isActive("/stats") ? "text-blue-500" : "text-gray-600"
              }`}
            >
              <BarChart2 size={20} />
              <span className="text-xs mt-1">통계</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`flex flex-col items-center ${
                isActive("/profile") ? "text-blue-500" : "text-gray-600"
              }`}
            >
              <User size={20} />
              <span className="text-xs mt-1">프로필</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
