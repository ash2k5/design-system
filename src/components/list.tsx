import * as React from "react";
import { cn } from "../lib/cn";

export const List = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn("m-0 list-none p-0", className)} {...props} />
));
List.displayName = "List";

export interface ListItemProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "title"> {
  index?: number | string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  (
    { className, index, title, description, action, children, ...props },
    ref
  ) => (
    <li
      ref={ref}
      className={cn(
        "flex items-start gap-4 border-b border-outline-variant py-stack-md",
        className
      )}
      {...props}
    >
      {index !== undefined && (
        <span className="font-display text-[length:var(--text-headline-md-size)] leading-none tabular-nums text-outline">
          {typeof index === "number" ? String(index).padStart(2, "0") : index}
        </span>
      )}
      <div className="min-w-0 flex-1">
        {title && (
          <div className="font-display text-[1.5rem] leading-[1.2] text-on-surface">
            {title}
          </div>
        )}
        {description && (
          <div className="font-body text-[length:var(--text-body-md-size)] text-on-surface-variant">
            {description}
          </div>
        )}
        {children}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </li>
  )
);
ListItem.displayName = "ListItem";
