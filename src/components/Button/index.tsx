import React from "react";
import classNames from "../../utils/classNames";
import ButtonProps from "./types/ButtonProps";

/**
 * Primary UI component for user interaction
 */
export default function Button({
  primary = false,
  disabled = false,
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const colorStyle = primary
    ? "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 border-transparent"
    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 focus:ring-primary-500";

  let sizeStyle: string;
  switch (size) {
    case "small":
      sizeStyle = "px-3 py-2 text-sm font-medium leading-4";
      break;
    case "large":
      sizeStyle = "px-4 py-2 text-base font-medium";
      break;
    case "default":
    default:
      sizeStyle = "px-4 py-2 text-sm font-medium";
  }

  const disabledStyle = disabled ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type="button"
      className={classNames(
        // base style
        "inline-flex items-center rounded-md border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
        colorStyle,
        sizeStyle,
        disabledStyle,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
