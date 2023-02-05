import React from "react";
import classNames from "../../utils/classNames";
import BadgeColors from "./types/BadgeColors";
import BadgeProps, { BadgeSize } from "./types/BadgeProps";

const sizeStyle: Record<BadgeSize, string> = {
  small: "px-2.5 text-xs",
  large: "px-3 text-sm",
};

export default function Badge({
  children,
  size = "small",
  color = "primary",
  danger = false,
}: BadgeProps) {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full py-0.5 font-medium text-gray-800",
        sizeStyle[size],
        danger ? BadgeColors["red"] : BadgeColors[color],
      )}
    >
      {children}
    </span>
  );
}
