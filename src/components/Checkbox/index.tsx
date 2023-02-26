import React from "react";
import classNames from "../../utils/classNames";
import CheckboxProps from "./types/CheckboxProps";

export default function Checkbox({
  name,
  label,
  // size,
  ...props
}: CheckboxProps) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-5 items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className={classNames(
            "h-4 w-4 rounded cursor-pointer",
            "border-primary-300 text-primary-600 focus:ring-primary-500",
            "disabled:cursor-not-allowed",
          )}
          {...props}
        />
      </div>
      {label ? (
        <div className="ml-3 text-sm">
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
        </div>
      ) : null}
    </div>
  );
}
