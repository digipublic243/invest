"use client";

import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "ghost";
type ButtonSize = "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className = "",
  variant = "ghost",
  size = "icon",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/60";
  const variants: Record<ButtonVariant, string> = {
    ghost:
      "bg-transparent text-zinc-700 hover:bg-zinc-100/70 dark:text-zinc-200 dark:hover:bg-white/10",
  };
  const sizes: Record<ButtonSize, string> = {
    icon: "h-9 w-9",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
