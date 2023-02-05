import { InputHTMLAttributes } from "react";
export default interface InputProps {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
  hint?: string;
  disabled?: boolean;
  defaultValue?: string;
  defaultChecked?: boolean;
  required?: boolean;
  label?: string;
  addOn?: string;
}
