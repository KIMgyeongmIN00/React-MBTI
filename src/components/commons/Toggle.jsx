import { useState } from "react";

export default function Toggle({
  defaultChecked = false,
  onToggle,
  disabled = false,
  size = "default",
  label,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleToggle = () => {
    if (!disabled) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      onToggle?.(newValue);
    }
  };

  const sizes = {
    small: "w-9 h-5",
    default: "w-11 h-6",
    large: "w-14 h-7",
  };

  const thumbSizes = {
    small: "h-4 w-4",
    default: "h-5 w-5",
    large: "h-6 w-6",
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
          {...props}
        />
        <div
          className={`
            ${sizes[size]}
            bg-gray-200
            rounded-full
            peer
            peer-focus:ring-2
            peer-focus:ring-blue-300
            dark:peer-focus:ring-blue-800
            dark:bg-gray-700
            peer-checked:bg-blue-600
            transition-colors
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        />
        <div
          className={`
            absolute
            top-0.5
            left-0.5
            ${thumbSizes[size]}
            bg-white
            rounded-full
            transition-transform
            duration-200
            peer-checked:translate-x-full
            ${disabled ? "cursor-not-allowed" : ""}
          `}
        />
      </div>
      {label && (
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </label>
  );
}
