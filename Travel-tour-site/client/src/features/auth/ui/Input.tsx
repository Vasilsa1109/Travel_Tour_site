import { FC, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input {...props} ref={ref} className="rounded" />;
  //props - свойства
  //ref - получение текущего значения
});
Input.displayName = "Input";
