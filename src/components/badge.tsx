import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";

const badgeVariants = cva(
  cn(
    "inline-flex items-center gap-[0.25rem] px-[0.625rem] py-[0.25rem] whitespace-nowrap leading-none",
    "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]"
  ),
  {
    variants: {
      variant: {
        default: "bg-surface-container-high text-on-surface",
        success: "bg-success-container text-success",
        warning: "bg-warning-container text-warning",
        danger: "bg-error-container text-error",
        info: "bg-info-container text-info",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { badgeVariants };
