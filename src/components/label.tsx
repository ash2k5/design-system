import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../lib/cn";

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)] text-on-surface-variant",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";
