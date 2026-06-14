import * as React from "react";
import { cn } from "../lib/cn";
import { microTransition } from "../lib/styles";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const errorId = error ? `${inputId}-error` : undefined;
    return (
      <div className="flex flex-col gap-stack-sm">
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            "w-full border-0 border-b border-outline-variant bg-transparent py-2",
            "font-body text-[length:var(--text-body-md-size)] text-on-surface placeholder:text-outline",
            "focus:border-on-surface focus:outline-none aria-[invalid=true]:border-error",
            "disabled:cursor-not-allowed disabled:opacity-35",
            microTransition,
            className
          )}
          {...props}
        />
        {error && (
          <p
            id={errorId}
            className="font-body text-[length:var(--text-label-md-size)] text-error"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
