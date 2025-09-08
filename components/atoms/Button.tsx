import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-base font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:pointer-events-none";

  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover active:bg-primary-active focus-visible:ring-primary"
      : "bg-transparent text-foreground hover:bg-foreground/5 focus-visible:ring-foreground";

  return <button className={`${base} ${styles} ${className}`} {...rest} />;
}
