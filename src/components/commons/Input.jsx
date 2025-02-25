import React from "react";

export default function Input({ label, type, logic }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} :
      </label>
      <input
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type={type}
        onChange={logic}
      />
    </div>
  );
}
