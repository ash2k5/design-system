import * as React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "../lib/cn";
import { Badge } from "./badge";

export interface SparklineProps extends React.SVGAttributes<SVGSVGElement> {
  data: number[];
  width?: number;
  height?: number;
}

export function Sparkline({
  data,
  width = 120,
  height = 32,
  className,
  ...props
}: SparklineProps) {
  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data
    .map(
      (d, i) =>
        `${(i * step).toFixed(2)},${(
          height -
          ((d - min) / range) * height
        ).toFixed(2)}`
    )
    .join(" ");
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className={cn("text-on-surface-variant", className)}
      {...props}
    >
      <polyline
        points={points}
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: React.ReactNode;
  delta?: { value: string; direction: "up" | "down" };
  data?: number[];
}

export const Metric = React.forwardRef<HTMLDivElement, MetricProps>(
  ({ className, label, value, delta, data, ...props }, ref) => {
    const isUp = delta?.direction === "up";
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-stack-sm", className)}
        {...props}
      >
        <span className="font-sans uppercase text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)] text-on-surface-variant">
          {label}
        </span>
        <div className="flex items-end justify-between gap-4">
          <span className="font-display text-[length:var(--text-headline-lg-size)] leading-none tabular-nums text-on-surface">
            {value}
          </span>
          {delta && (
            <Badge variant={isUp ? "success" : "danger"}>
              {isUp ? (
                <ArrowUp className="size-3" aria-hidden />
              ) : (
                <ArrowDown className="size-3" aria-hidden />
              )}
              {delta.value}
            </Badge>
          )}
        </div>
        {data && data.length > 1 && (
          <Sparkline
            data={data}
            className={cn("w-full", isUp ? "text-success" : "text-error")}
          />
        )}
      </div>
    );
  }
);
Metric.displayName = "Metric";
