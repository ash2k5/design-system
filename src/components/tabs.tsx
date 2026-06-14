import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../lib/cn";
import { focusRing, microTransition } from "../lib/styles";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center gap-6 border-b border-outline-variant",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative -mb-px cursor-pointer border-b border-transparent py-3",
      "font-sans uppercase font-semibold text-[length:var(--text-label-md-size)] tracking-[0.08em] text-on-surface-variant",
      "hover:text-on-surface data-[state=active]:border-on-surface data-[state=active]:text-on-surface",
      "disabled:pointer-events-none disabled:opacity-35",
      focusRing,
      microTransition,
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("pt-6", focusRing, className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";
