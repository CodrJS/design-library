import React from "react";
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
          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
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
