import { PropsWithChildren } from "react";
import { SIZE } from "../../../types/constants";

export default interface ButtonProps extends PropsWithChildren {
  primary?: boolean;
  disabled?: boolean;
  size?: SIZE;
  onClick?: () => void;
}
