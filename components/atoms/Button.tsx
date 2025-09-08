import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  loading?: boolean;
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  loading = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const disabled = loading || rest.disabled;
  const base =
    "inline-flex items-center justify-center h-12 min-w-12 px-4 rounded-xl font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-primary-base text-white hover:bg-primary-hover active:bg-primary-active focus-visible:ring-primary-base"
      : "bg-transparent text-foreground border border-foreground/20 hover:bg-foreground/5 active:bg-foreground/10 focus-visible:ring-foreground";

  return (
    <button
      className={`${base} ${styles} ${className}`}
      disabled={disabled}
      aria-busy={loading}
      {...rest}
    >
      {children}
    </button>
  );
}
