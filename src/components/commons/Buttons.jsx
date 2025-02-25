import React from "react";

export default function Buttons({ label, type, mutation }) {
  return (
    <div>
      <button
        className={`w-full py-2 px-4 text-black font-semibold rounded-lg transition bg-blue-500 hover:bg-blue-600
      `}
        type={type}
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? `${label} 중...` : `${label} 버튼`}
      </button>
    </div>
  );
}
