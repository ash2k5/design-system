import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/cn";
import { focusRing, microTransition } from "../lib/styles";
import { useTheme } from "../lib/theme";

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ThemeToggle = React.forwardRef<
  HTMLButtonElement,
  ThemeToggleProps
>(({ className, ...props }, ref) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "inline-flex size-10 items-center justify-center border border-outline-variant bg-transparent text-on-surface cursor-pointer",
        "hover:bg-on-surface hover:text-surface hover:border-on-surface",
        focusRing,
        microTransition,
        className
      )}
      {...props}
    >
      {/* Render nothing theme-specific until mounted to avoid hydration drift. */}
      {theme === null ? (
        <span className="size-[18px]" aria-hidden />
      ) : isDark ? (
        <Sun className="size-[18px]" aria-hidden />
      ) : (
        <Moon className="size-[18px]" aria-hidden />
      )}
    </button>
  );
});
ThemeToggle.displayName = "ThemeToggle";
