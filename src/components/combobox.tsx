import * as React from "react";
import { Command } from "cmdk";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "../lib/cn";
import { focusRing, microTransition } from "../lib/styles";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  disabled?: boolean;
  className?: string;
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyText = "No results.",
  disabled,
  className,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "flex w-full items-center justify-between gap-2 border-0 border-b border-outline-variant bg-transparent py-2",
            "font-body text-[length:var(--text-body-md-size)] text-on-surface",
            "focus:border-on-surface disabled:cursor-not-allowed disabled:opacity-35",
            focusRing,
            microTransition,
            className
          )}
        >
          <span className={cn(!selected && "text-outline")}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown className="size-4 opacity-70" aria-hidden />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command className="font-body text-on-surface">
          <div className="border-b border-outline-variant px-3">
            <Command.Input
              placeholder={searchPlaceholder}
              className="w-full bg-transparent py-2.5 text-[length:var(--text-body-sm-size)] text-on-surface placeholder:text-outline focus:outline-none"
            />
          </div>
          <Command.List className="max-h-60 overflow-auto p-1">
            <Command.Empty className="py-6 text-center text-[length:var(--text-body-sm-size)] text-on-surface-variant">
              {emptyText}
            </Command.Empty>
            {options.map((option) => (
              <Command.Item
                key={option.value}
                value={option.label}
                onSelect={() => {
                  onValueChange?.(option.value);
                  setOpen(false);
                }}
                className="flex cursor-pointer items-center gap-2 px-2 py-2 text-[length:var(--text-body-sm-size)] text-on-surface data-[selected=true]:bg-surface-container-high"
              >
                <Check
                  className={cn(
                    "size-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden
                />
                {option.label}
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
