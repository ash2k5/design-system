import * as React from "react";
import { cn } from "../lib/cn";

const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const AURORA_GRADIENT =
  "radial-gradient(circle at 15% 50%, var(--aurora-1), transparent 50%), radial-gradient(circle at 85% 30%, var(--aurora-2), transparent 50%), radial-gradient(circle at 50% 80%, var(--aurora-3), transparent 50%)";

export interface AuroraBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  grain?: boolean;
}

// Fixed aurora gradient + SVG grain layers behind page content (no photo). The
// aurora hides under prefers-reduced-transparency; grain is a flat overlay.
export function AuroraBackground({
  grain = true,
  className,
  style,
  ...props
}: AuroraBackgroundProps) {
  return (
    <>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-0 -z-20 opacity-80 [filter:blur(80px)]",
          "[@media(prefers-reduced-transparency:reduce)]:hidden",
          className
        )}
        style={{ background: AURORA_GRADIENT, ...style }}
        {...props}
      />
      {grain && (
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [mix-blend-mode:var(--grain-blend)]"
          style={{ backgroundImage: GRAIN_URL }}
        />
      )}
    </>
  );
}
