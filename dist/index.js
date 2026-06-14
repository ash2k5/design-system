"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as React13 from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { Loader2, Sun, Moon, X, ChevronDown, Check, ArrowUp, ArrowDown, ChevronsUpDown } from 'lucide-react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Command } from 'cmdk';

// src/lib/cn.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/lib/styles.ts
var focusRing = "outline-none focus-visible:[outline:2px_solid_var(--on-surface)] focus-visible:outline-offset-2";
var glassSurface = "bg-[var(--glass-fill)] border border-[var(--glass-border)] [backdrop-filter:blur(var(--glass-blur))_saturate(1.1)] [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(1.1)] [@media(prefers-reduced-transparency:reduce)]:bg-surface-container [@media(prefers-reduced-transparency:reduce)]:[backdrop-filter:none]";
var microTransition = "transition-[opacity,transform,background-color,color,border-color] duration-[var(--dur-micro)] ease-[var(--ease)] motion-reduce:transition-none";
var THEME_STORAGE_KEY = "ds-theme";
var themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;
function getTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
  }
}
function useTheme() {
  const [theme, setThemeState] = React13.useState(null);
  React13.useEffect(() => {
    setThemeState(getTheme());
  }, []);
  const toggle = React13.useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  }, []);
  return { theme, toggle };
}
var buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-stack-sm border border-transparent cursor-pointer select-none",
    "font-sans uppercase font-semibold leading-none text-[length:var(--text-label-md-size)] tracking-[0.08em]",
    "px-[1.625rem] py-[0.875rem] active:scale-[0.98]",
    "disabled:opacity-35 disabled:pointer-events-none aria-disabled:opacity-35 aria-disabled:pointer-events-none",
    focusRing,
    microTransition
  ),
  {
    variants: {
      variant: {
        primary: "bg-primary text-on-primary hover:opacity-85",
        ghost: "bg-transparent border-on-surface text-on-surface hover:bg-on-surface hover:text-surface",
        text: "bg-transparent text-on-surface-variant hover:text-on-surface px-0"
      }
    },
    defaultVariants: { variant: "primary" }
  }
);
var Button = React13.forwardRef(
  ({
    className,
    variant,
    asChild = false,
    loading = false,
    disabled,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        ref,
        className: cn(buttonVariants({ variant }), className),
        disabled: disabled || loading,
        "aria-busy": loading || void 0,
        ...props,
        children: asChild ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
          loading && /* @__PURE__ */ jsx(Loader2, { className: "size-[13px] animate-spin", "aria-hidden": true }),
          children
        ] })
      }
    );
  }
);
Button.displayName = "Button";
var Label = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)] text-on-surface-variant",
      className
    ),
    ...props
  }
));
Label.displayName = "Label";
var Input = React13.forwardRef(
  ({ className, label, error, id, ...props }, ref) => {
    const autoId = React13.useId();
    const inputId = id ?? autoId;
    const errorId = error ? `${inputId}-error` : void 0;
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-stack-sm", children: [
      label && /* @__PURE__ */ jsx(Label, { htmlFor: inputId, children: label }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          id: inputId,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": errorId,
          className: cn(
            "w-full border-0 border-b border-outline-variant bg-transparent py-2",
            "font-body text-[length:var(--text-body-md-size)] text-on-surface placeholder:text-outline",
            "focus:border-on-surface focus:outline-none aria-[invalid=true]:border-error",
            "disabled:cursor-not-allowed disabled:opacity-35",
            microTransition,
            className
          ),
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx(
        "p",
        {
          id: errorId,
          className: "font-body text-[length:var(--text-label-md-size)] text-error",
          children: error
        }
      )
    ] });
  }
);
Input.displayName = "Input";
var Textarea = React13.forwardRef(
  ({ className, label, error, id, rows = 4, ...props }, ref) => {
    const autoId = React13.useId();
    const textareaId = id ?? autoId;
    const errorId = error ? `${textareaId}-error` : void 0;
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-stack-sm", children: [
      label && /* @__PURE__ */ jsx(Label, { htmlFor: textareaId, children: label }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          id: textareaId,
          rows,
          "aria-invalid": error ? true : void 0,
          "aria-describedby": errorId,
          className: cn(
            "w-full resize-y border-0 border-b border-outline-variant bg-transparent py-2",
            "font-body text-[length:var(--text-body-md-size)] text-on-surface placeholder:text-outline",
            "focus:border-on-surface focus:outline-none aria-[invalid=true]:border-error",
            "disabled:cursor-not-allowed disabled:opacity-35",
            microTransition,
            className
          ),
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx(
        "p",
        {
          id: errorId,
          className: "font-body text-[length:var(--text-label-md-size)] text-error",
          children: error
        }
      )
    ] });
  }
);
Textarea.displayName = "Textarea";
var badgeVariants = cva(
  cn(
    "inline-flex items-center gap-[0.25rem] px-[0.625rem] py-[0.25rem] whitespace-nowrap leading-none",
    "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]"
  ),
  {
    variants: {
      variant: {
        default: "bg-surface-container-high text-on-surface",
        success: "bg-success-container text-success",
        warning: "bg-warning-container text-warning",
        danger: "bg-error-container text-error",
        info: "bg-info-container text-info"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var Badge = React13.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  )
);
Badge.displayName = "Badge";
var cardVariants = cva("p-card-padding", {
  variants: {
    level: {
      resting: glassSurface,
      floating: cn(glassSurface, "shadow-[var(--ambient-shadow)]"),
      flat: "border border-outline-variant bg-surface-container"
    }
  },
  defaultVariants: { level: "resting" }
});
var Card = React13.forwardRef(
  ({ className, level, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(cardVariants({ level }), className),
      ...props
    }
  )
);
Card.displayName = "Card";
var ThemeToggle = React13.forwardRef(({ className, ...props }, ref) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: "button",
      onClick: toggle,
      "aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
      "aria-pressed": isDark,
      className: cn(
        "inline-flex size-10 items-center justify-center border border-outline-variant bg-transparent text-on-surface cursor-pointer",
        "hover:bg-on-surface hover:text-surface hover:border-on-surface",
        focusRing,
        microTransition,
        className
      ),
      ...props,
      children: theme === null ? /* @__PURE__ */ jsx("span", { className: "size-[18px]", "aria-hidden": true }) : isDark ? /* @__PURE__ */ jsx(Sun, { className: "size-[18px]", "aria-hidden": true }) : /* @__PURE__ */ jsx(Moon, { className: "size-[18px]", "aria-hidden": true })
    }
  );
});
ThemeToggle.displayName = "ThemeToggle";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogClose = DialogPrimitive.Close;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] [backdrop-filter:blur(2px)]",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-1/2 top-1/2 z-50 w-[calc(100vw-2.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2",
        glassSurface,
        "p-card-padding shadow-[var(--ambient-shadow)]",
        focusRing,
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(
          DialogPrimitive.Close,
          {
            "aria-label": "Close",
            className: cn(
              "absolute right-4 top-4 inline-flex size-8 items-center justify-center text-on-surface-variant hover:text-on-surface",
              focusRing,
              microTransition
            ),
            children: /* @__PURE__ */ jsx(X, { className: "size-[18px]", "aria-hidden": true })
          }
        )
      ]
    }
  )
] }));
DialogContent.displayName = "DialogContent";
function DialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("flex flex-col gap-stack-sm pr-8", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "mt-stack-md flex flex-wrap items-center justify-end gap-stack-sm",
        className
      ),
      ...props
    }
  );
}
var DialogTitle = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "font-display text-[length:var(--text-headline-md-size)] leading-[var(--text-headline-md-lh)] text-on-surface",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = "DialogTitle";
var DialogDescription = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn(
      "font-body text-[length:var(--text-body-md-size)] text-on-surface-variant",
      className
    ),
    ...props
  }
));
DialogDescription.displayName = "DialogDescription";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverAnchor = PopoverPrimitive.Anchor;
var PopoverClose = PopoverPrimitive.Close;
var PopoverContent = React13.forwardRef(({ className, align = "center", sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 p-4",
      glassSurface,
      "shadow-[var(--ambient-shadow)]",
      focusRing,
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = "PopoverContent";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React13.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-w-xs bg-inverse-surface px-[0.625rem] py-[0.375rem] text-inverse-on-surface shadow-[var(--ambient-shadow)]",
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = "TooltipContent";
var Tabs = TabsPrimitive.Root;
var TabsList = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex items-center gap-6 border-b border-outline-variant",
      className
    ),
    ...props
  }
));
TabsList.displayName = "TabsList";
var TabsTrigger = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "relative -mb-px cursor-pointer border-b border-transparent py-3",
      "font-sans uppercase font-semibold text-[length:var(--text-label-md-size)] tracking-[0.08em] text-on-surface-variant",
      "hover:text-on-surface data-[state=active]:border-on-surface data-[state=active]:text-on-surface",
      "disabled:pointer-events-none disabled:opacity-35",
      focusRing,
      microTransition,
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn("pt-6", focusRing, className),
    ...props
  }
));
TabsContent.displayName = "TabsContent";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex w-full items-center justify-between gap-2 border-0 border-b border-outline-variant bg-transparent py-2",
      "font-body text-[length:var(--text-body-md-size)] text-on-surface data-[placeholder]:text-outline",
      "focus:border-on-surface disabled:cursor-not-allowed disabled:opacity-35",
      focusRing,
      microTransition,
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4 opacity-70", "aria-hidden": true }) })
    ]
  }
));
SelectTrigger.displayName = "SelectTrigger";
var SelectContent = React13.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  SelectPrimitive.Content,
  {
    ref,
    position,
    className: cn(
      "z-50 max-h-[var(--radix-select-content-available-height)] min-w-[8rem] overflow-hidden",
      glassSurface,
      "shadow-[var(--ambient-shadow)]",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = "SelectContent";
var SelectLabel = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn(
      "px-3 py-2 font-sans uppercase text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)] text-on-surface-variant",
      className
    ),
    ...props
  }
));
SelectLabel.displayName = "SelectLabel";
var SelectItem = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-pointer select-none items-center py-2 pl-8 pr-3 outline-none",
      "font-body text-[length:var(--text-body-sm-size)] text-on-surface",
      "data-[highlighted]:bg-surface-container-high data-[state=checked]:font-semibold",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-35",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 inline-flex items-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4", "aria-hidden": true }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = "SelectItem";
var SelectSeparator = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("my-1 h-px bg-outline-variant", className),
    ...props
  }
));
SelectSeparator.displayName = "SelectSeparator";
function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyText = "No results.",
  disabled,
  className
}) {
  const [open, setOpen] = React13.useState(false);
  const selected = options.find((o) => o.value === value);
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        role: "combobox",
        "aria-expanded": open,
        disabled,
        className: cn(
          "flex w-full items-center justify-between gap-2 border-0 border-b border-outline-variant bg-transparent py-2",
          "font-body text-[length:var(--text-body-md-size)] text-on-surface",
          "focus:border-on-surface disabled:cursor-not-allowed disabled:opacity-35",
          focusRing,
          microTransition,
          className
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: cn(!selected && "text-outline"), children: selected ? selected.label : placeholder }),
          /* @__PURE__ */ jsx(ChevronsUpDown, { className: "size-4 opacity-70", "aria-hidden": true })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(
      PopoverContent,
      {
        align: "start",
        className: "w-[var(--radix-popover-trigger-width)] p-0",
        children: /* @__PURE__ */ jsxs(Command, { className: "font-body text-on-surface", children: [
          /* @__PURE__ */ jsx("div", { className: "border-b border-outline-variant px-3", children: /* @__PURE__ */ jsx(
            Command.Input,
            {
              placeholder: searchPlaceholder,
              className: "w-full bg-transparent py-2.5 text-[length:var(--text-body-sm-size)] text-on-surface placeholder:text-outline focus:outline-none"
            }
          ) }),
          /* @__PURE__ */ jsxs(Command.List, { className: "max-h-60 overflow-auto p-1", children: [
            /* @__PURE__ */ jsx(Command.Empty, { className: "py-6 text-center text-[length:var(--text-body-sm-size)] text-on-surface-variant", children: emptyText }),
            options.map((option) => /* @__PURE__ */ jsxs(
              Command.Item,
              {
                value: option.label,
                onSelect: () => {
                  onValueChange?.(option.value);
                  setOpen(false);
                },
                className: "flex cursor-pointer items-center gap-2 px-2 py-2 text-[length:var(--text-body-sm-size)] text-on-surface data-[selected=true]:bg-surface-container-high",
                children: [
                  /* @__PURE__ */ jsx(
                    Check,
                    {
                      className: cn(
                        "size-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      ),
                      "aria-hidden": true
                    }
                  ),
                  option.label
                ]
              },
              option.value
            ))
          ] })
        ] })
      }
    )
  ] });
}
var List2 = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ul", { ref, className: cn("m-0 list-none p-0", className), ...props }));
List2.displayName = "List";
var ListItem = React13.forwardRef(
  ({ className, index, title, description, action, children, ...props }, ref) => /* @__PURE__ */ jsxs(
    "li",
    {
      ref,
      className: cn(
        "flex items-start gap-4 border-b border-outline-variant py-stack-md",
        className
      ),
      ...props,
      children: [
        index !== void 0 && /* @__PURE__ */ jsx("span", { className: "font-display text-[length:var(--text-headline-md-size)] leading-none tabular-nums text-outline", children: typeof index === "number" ? String(index).padStart(2, "0") : index }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          title && /* @__PURE__ */ jsx("div", { className: "font-display text-[1.5rem] leading-[1.2] text-on-surface", children: title }),
          description && /* @__PURE__ */ jsx("div", { className: "font-body text-[length:var(--text-body-md-size)] text-on-surface-variant", children: description }),
          children
        ] }),
        action && /* @__PURE__ */ jsx("div", { className: "shrink-0", children: action })
      ]
    }
  )
);
ListItem.displayName = "ListItem";
function Sparkline({
  data,
  width = 120,
  height = 32,
  className,
  ...props
}) {
  if (data.length < 2) return null;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const points = data.map(
    (d, i) => `${(i * step).toFixed(2)},${(height - (d - min) / range * height).toFixed(2)}`
  ).join(" ");
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width,
      height,
      viewBox: `0 0 ${width} ${height}`,
      fill: "none",
      preserveAspectRatio: "none",
      "aria-hidden": true,
      className: cn("text-on-surface-variant", className),
      ...props,
      children: /* @__PURE__ */ jsx(
        "polyline",
        {
          points,
          stroke: "currentColor",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          vectorEffect: "non-scaling-stroke"
        }
      )
    }
  );
}
var Metric = React13.forwardRef(
  ({ className, label, value, delta, data, ...props }, ref) => {
    const isUp = delta?.direction === "up";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn("flex flex-col gap-stack-sm", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-sans uppercase text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)] text-on-surface-variant", children: label }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-[length:var(--text-headline-lg-size)] leading-none tabular-nums text-on-surface", children: value }),
            delta && /* @__PURE__ */ jsxs(Badge, { variant: isUp ? "success" : "danger", children: [
              isUp ? /* @__PURE__ */ jsx(ArrowUp, { className: "size-3", "aria-hidden": true }) : /* @__PURE__ */ jsx(ArrowDown, { className: "size-3", "aria-hidden": true }),
              delta.value
            ] })
          ] }),
          data && data.length > 1 && /* @__PURE__ */ jsx(
            Sparkline,
            {
              data,
              className: cn("w-full", isUp ? "text-success" : "text-error")
            }
          )
        ]
      }
    );
  }
);
Metric.displayName = "Metric";
var GRAIN_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
var AURORA_GRADIENT = "radial-gradient(circle at 15% 50%, var(--aurora-1), transparent 50%), radial-gradient(circle at 85% 30%, var(--aurora-2), transparent 50%), radial-gradient(circle at 50% 80%, var(--aurora-3), transparent 50%)";
function AuroraBackground({
  grain = true,
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: cn(
          "pointer-events-none fixed inset-0 -z-20 opacity-80 [filter:blur(80px)]",
          "[@media(prefers-reduced-transparency:reduce)]:hidden",
          className
        ),
        style: { background: AURORA_GRADIENT, ...style },
        ...props
      }
    ),
    grain && /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 -z-10 opacity-[0.05] [mix-blend-mode:var(--grain-blend)]",
        style: { backgroundImage: GRAIN_URL }
      }
    )
  ] });
}
var Container = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "mx-auto w-full max-w-[var(--space-container-max)] px-margin-mobile md:px-margin-desktop",
      className
    ),
    ...props
  }
));
Container.displayName = "Container";
var Grid = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "grid grid-cols-4 gap-gutter md:grid-cols-8 lg:grid-cols-12",
      className
    ),
    ...props
  }
));
Grid.displayName = "Grid";
var Masthead = React13.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  "header",
  {
    ref,
    className: cn(
      "sticky top-0 z-40 border-b border-outline-variant",
      "bg-[var(--glass-fill)] [backdrop-filter:blur(16px)_saturate(1.1)]",
      "[@media(prefers-reduced-transparency:reduce)]:bg-surface [@media(prefers-reduced-transparency:reduce)]:[backdrop-filter:none]",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex w-full max-w-[var(--space-container-max)] items-center justify-between gap-6 px-margin-mobile py-4 md:px-margin-desktop", children })
  }
));
Masthead.displayName = "Masthead";
function MastheadBrand({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "font-display text-[length:var(--text-headline-md-size)] leading-none text-on-surface",
        className
      ),
      ...props
    }
  );
}
function MastheadNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("nav", { className: cn("flex items-center gap-6", className), ...props });
}
var MastheadLink = React13.forwardRef(({ className, active, ...props }, ref) => /* @__PURE__ */ jsx(
  "a",
  {
    ref,
    "aria-current": active ? "page" : void 0,
    className: cn(
      "border-b border-transparent pb-1 text-on-surface-variant hover:text-on-surface",
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]",
      active && "border-on-surface text-on-surface",
      focusRing,
      microTransition,
      className
    ),
    ...props
  }
));
MastheadLink.displayName = "MastheadLink";
function MastheadActions({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("flex items-center gap-stack-sm", className),
      ...props
    }
  );
}
var Sidebar = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("aside", { ref, className: cn("flex flex-col", className), ...props }));
Sidebar.displayName = "Sidebar";
function SidebarNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("nav", { className: cn("flex flex-col", className), ...props });
}
var SidebarLink = React13.forwardRef(({ className, active, disabled, icon, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  "a",
  {
    ref,
    "aria-current": active ? "page" : void 0,
    "aria-disabled": disabled || void 0,
    className: cn(
      "relative flex items-center gap-3 border-b border-outline-variant py-3 pl-4",
      "font-sans uppercase font-semibold text-[length:var(--text-label-sm-size)] tracking-[var(--text-label-sm-tracking)]",
      "text-on-surface-variant hover:text-on-surface",
      active && "text-on-surface before:absolute before:left-0 before:top-1/2 before:h-4 before:w-[2px] before:-translate-y-1/2 before:bg-on-surface",
      disabled && "pointer-events-none opacity-35",
      focusRing,
      microTransition,
      className
    ),
    ...props,
    children: [
      icon && /* @__PURE__ */ jsx("span", { className: "inline-flex size-[18px] items-center justify-center [&>svg]:size-[18px]", children: icon }),
      children
    ]
  }
));
SidebarLink.displayName = "SidebarLink";

export { AuroraBackground, Badge, Button, Card, Combobox, Container, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Grid, Input, Label, List2 as List, ListItem, Masthead, MastheadActions, MastheadBrand, MastheadLink, MastheadNav, Metric, Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Sidebar, SidebarLink, SidebarNav, Sparkline, THEME_STORAGE_KEY, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeToggle, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cardVariants, cn, focusRing, getTheme, glassSurface, microTransition, setTheme, themeInitScript, useTheme };
