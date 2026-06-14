import * as React from "react";
import { cn } from "../lib/cn";
import { focusRing, microTransition } from "../lib/styles";

export const Sidebar = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <aside ref={ref} className={cn("flex flex-col", className)} {...props} />
));
Sidebar.displayName = "Sidebar";

export function SidebarNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return <nav className={cn("flex flex-col", className)} {...props} />;
}

export interface SidebarLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const SidebarLink = React.forwardRef<
  HTMLAnchorElement,
  SidebarLinkProps
>(({ className, active, disabled, icon, children, ...props }, ref) => (
  <a
    ref={ref}
    aria-current={active ? "page" : undefined}
    aria-disabled={disabled || undefined}
    className={cn(
      "relative flex items-center gap-3 border-b border-outline-variant py-3 pl-4",
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]",
      "text-on-surface-variant hover:text-on-surface",
      active &&
        "text-on-surface before:absolute before:left-0 before:top-1/2 before:h-4 before:w-[2px] before:-translate-y-1/2 before:bg-on-surface",
      disabled && "pointer-events-none opacity-35",
      focusRing,
      microTransition,
      className
    )}
    {...props}
  >
    {icon && (
      <span className="inline-flex size-[18px] items-center justify-center [&>svg]:size-[18px]">
        {icon}
      </span>
    )}
    {children}
  </a>
));
SidebarLink.displayName = "SidebarLink";
