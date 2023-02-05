import React from "react";
import classNames from "../../utils/classNames";
import InputProps from "./types/InputProps";

export default function Input({
  name,
  type = "text",
  hint,
  disabled = false,
  label,
  addOn,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label ? label : name.charAt(0).toLocaleUpperCase() + name.substring(1)}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        {addOn ? (
          <span
            className={classNames(
              "inline-flex items-center rounded-l-md border border-r-0 bg-gray-50 px-3 text-gray-500 sm:text-sm",
              disabled
                ? "cursor-not-allowed border-gray-200"
                : "border-gray-300 ",
            )}
          >
            {addOn}
          </span>
        ) : null}
        <input
          name={name}
          id={name}
          type={type}
          className={classNames(
            "block w-full border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500",
            addOn ? "rounded-r-md" : "rounded-md",
          )}
          {...props}
        />
      </div>
      {hint && (
        <p className="mt-2 text-sm text-gray-500" id="email-description">
          {hint}
        </p>
      )}
    </div>
  );
}
