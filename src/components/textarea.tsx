import * as React from "react";
import { cn } from "../lib/cn";
import { microTransition } from "../lib/styles";
import { Label } from "./label";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const autoId = React.useId();
    const textareaId = id ?? autoId;
    const errorId = error ? `${textareaId}-error` : undefined;
    return (
      <div className="flex flex-col gap-stack-sm">
        {label && <Label htmlFor={textareaId}>{label}</Label>}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={cn(
            "w-full resize-y border-0 border-b border-outline-variant bg-transparent py-2",
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
Textarea.displayName = "Textarea";
