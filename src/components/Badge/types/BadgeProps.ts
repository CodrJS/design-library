import { PropsWithChildren } from "react";
import { SIZE } from "../../../types/constants";
import { BadgeColorType } from "./BadgeColors";

export type BadgeSize = Exclude<SIZE, "medium">;
export default interface BadgeProps extends PropsWithChildren {
  outline?: boolean;
  size?: BadgeSize;
  color?: BadgeColorType;
  danger?: boolean;
}
