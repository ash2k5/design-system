import * as React from "react";
import { cn } from "../lib/cn";

// Centered editorial container with responsive side margins.
export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto w-full max-w-[var(--space-container-max)] px-margin-mobile md:px-margin-desktop",
      className
    )}
    {...props}
  />
));
Container.displayName = "Container";

// Fluid 12-col grid (4 -> 8 -> 12 across breakpoints).
export const Grid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-4 gap-gutter md:grid-cols-8 lg:grid-cols-12",
      className
    )}
    {...props}
  />
));
Grid.displayName = "Grid";
