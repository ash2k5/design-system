import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/cn";
import { glassSurface } from "../lib/styles";

// resting = Level 1 glass card, floating = Level 2 (modal/popover) adds the
// ambient shadow, flat = opaque container for dense/dashboard contexts.
const cardVariants = cva("p-card-padding", {
  variants: {
    level: {
      resting: glassSurface,
      floating: cn(glassSurface, "shadow-[var(--ambient-shadow)]"),
      flat: "border border-outline-variant bg-surface-container",
    },
  },
  defaultVariants: { level: "resting" },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, level, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ level }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { cardVariants };
