import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-base font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-40 disabled:pointer-events-none";

  const styles =
    variant === "primary"
      ? "bg-accent text-canvas hover:bg-accent/90 active:bg-accent/75"
      : "bg-transparent text-default hover:bg-surface";

  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
