import { ChangeEvent } from "react";

export default interface CheckboxProps {
  name: string;
  // size?: "small" | "default" | "large";
  label?: string;
  disabled?: boolean;
  defaultChecked?: boolean;
  required?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
