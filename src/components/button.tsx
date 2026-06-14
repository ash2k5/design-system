import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/cn";
import { focusRing, microTransition } from "../lib/styles";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-stack-sm border border-transparent cursor-pointer select-none",
    "font-sans uppercase font-semibold leading-none text-[length:var(--text-label-md-size)] tracking-[0.08em]",
    "px-[1.625rem] py-[0.875rem] active:scale-[0.98]",
    "disabled:opacity-35 disabled:pointer-events-none aria-disabled:opacity-35 aria-disabled:pointer-events-none",
    focusRing,
    microTransition
  ),
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary hover:opacity-85",
        ghost:
          "bg-transparent border-on-surface text-on-surface hover:bg-on-surface hover:text-surface",
        text: "bg-transparent text-on-surface-variant hover:text-on-surface px-0",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {loading && (
              <Loader2 className="size-[13px] animate-spin" aria-hidden />
            )}
            {children}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
