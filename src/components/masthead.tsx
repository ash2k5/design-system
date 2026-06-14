import * as React from "react";
import { cn } from "../lib/cn";
import { focusRing, microTransition } from "../lib/styles";

// Sticky masthead with a blurred translucent backing.
export const Masthead = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      "sticky top-0 z-40 border-b border-outline-variant",
      "bg-[var(--glass-fill)] [backdrop-filter:blur(16px)_saturate(1.1)]",
      "[@media(prefers-reduced-transparency:reduce)]:bg-surface [@media(prefers-reduced-transparency:reduce)]:[backdrop-filter:none]",
      className
    )}
    {...props}
  >
    <div className="mx-auto flex w-full max-w-[var(--space-container-max)] items-center justify-between gap-6 px-margin-mobile py-4 md:px-margin-desktop">
      {children}
    </div>
  </header>
));
Masthead.displayName = "Masthead";

export function MastheadBrand({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "font-display text-[length:var(--text-headline-md-size)] leading-none text-on-surface",
        className
      )}
      {...props}
    />
  );
}

export function MastheadNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center gap-6", className)} {...props} />
  );
}

export interface MastheadLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

export const MastheadLink = React.forwardRef<
  HTMLAnchorElement,
  MastheadLinkProps
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    aria-current={active ? "page" : undefined}
    className={cn(
      "border-b border-transparent pb-1 text-on-surface-variant hover:text-on-surface",
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]",
      active && "border-on-surface text-on-surface",
      focusRing,
      microTransition,
      className
    )}
    {...props}
  />
));
MastheadLink.displayName = "MastheadLink";

export function MastheadActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center gap-stack-sm", className)}
      {...props}
    />
  );
}
