import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-sm active:scale-[0.98]",
  secondary:
    "bg-warm-100 text-warm-800 hover:bg-warm-200",
  outline:
    "border border-warm-300 text-warm-700 hover:bg-warm-50 hover:border-warm-400",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium tracking-wide transition-all ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
