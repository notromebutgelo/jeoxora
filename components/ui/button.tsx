import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[14px] font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40 disabled:cursor-not-allowed disabled:opacity-60",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "px-4 py-2.5 text-sm",
        icon: "h-10 w-10 text-sm",
        lg: "px-5 py-3 text-sm",
        sm: "px-3 py-2 text-xs",
      },
      variant: {
        ghost:
          "bg-transparent text-[color:var(--text-muted)] hover:bg-[color:var(--surface-inset)] hover:text-[color:var(--text)]",
        outline:
          "border border-[color:var(--border)] bg-transparent text-[color:var(--text)] hover:border-[color:var(--border-strong)] hover:bg-[color:var(--surface-inset)]",
        primary:
          "bg-[color:var(--primary)] text-white shadow-[0_16px_40px_rgba(109,40,217,0.24)] hover:bg-[color:var(--primary-hover)]",
        secondary:
          "bg-[color:var(--accent-soft)] text-[color:var(--accent)] hover:opacity-90",
      },
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  children: ReactNode;
};

export function Button({
  asChild = false,
  children,
  className,
  size = "default",
  variant = "primary",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(buttonVariants({ size, variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
