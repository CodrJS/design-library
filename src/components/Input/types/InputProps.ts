import type { HTMLInputTypeAttribute } from "react";

export default interface InputProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  hint?: string;
  disabled?: boolean;
  defaultValue?: string;
  defaultChecked?: boolean;
  required?: boolean;
  label?: string;
  addOn?: React.ReactNode;
}
