import { SIZE } from "../../../types/constants";

export default interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  size?: SIZE;
  label: string;
  onClick?: () => void;
}
