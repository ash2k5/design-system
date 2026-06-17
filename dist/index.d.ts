import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as SelectPrimitive from '@radix-ui/react-select';

declare function cn(...inputs: ClassValue[]): string;

declare const focusRing = "outline-none focus-visible:[outline:2px_solid_var(--on-surface)] focus-visible:outline-offset-2";
declare const glassSurface = "bg-[var(--glass-fill)] border border-[var(--glass-border)] [backdrop-filter:blur(var(--glass-blur))_saturate(1.1)] [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(1.1)] [@media(prefers-reduced-transparency:reduce)]:bg-surface-container [@media(prefers-reduced-transparency:reduce)]:[backdrop-filter:none]";
declare const microTransition = "transition-[opacity,transform,background-color,color,border-color] duration-[var(--dur-micro)] ease-[var(--ease)] motion-reduce:transition-none";

type Theme = "light" | "dark";
declare const THEME_STORAGE_KEY = "ds-theme";
declare const themeInitScript = "(function(){try{var t=localStorage.getItem(\"ds-theme\")||(window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\");document.documentElement.setAttribute(\"data-theme\",t);}catch(e){}})();";
declare function getTheme(): Theme;
declare function setTheme(theme: Theme): void;
declare function useTheme(): {
    theme: Theme | null;
    toggle: () => void;
};

declare const buttonVariants: (props?: ({
    variant?: "primary" | "ghost" | "text" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & React.RefAttributes<HTMLLabelElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const badgeVariants: (props?: ({
    variant?: "default" | "success" | "warning" | "danger" | "info" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

declare const cardVariants: (props?: ({
    level?: "flat" | "resting" | "floating" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;

interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const ThemeToggle: React.ForwardRefExoticComponent<ThemeToggleProps & React.RefAttributes<HTMLButtonElement>>;

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare function DialogHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare function DialogFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare const PopoverClose: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const TooltipProvider: React.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface ComboboxOption {
    value: string;
    label: string;
}
interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    searchPlaceholder?: string;
    emptyText?: string;
    disabled?: boolean;
    className?: string;
}
declare function Combobox({ options, value, onValueChange, placeholder, searchPlaceholder, emptyText, disabled, className, }: ComboboxProps): React.JSX.Element;

declare const List: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLUListElement> & React.RefAttributes<HTMLUListElement>>;
interface ListItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "title"> {
    index?: number | string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
}
declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLLIElement>>;

interface SparklineProps extends React.SVGAttributes<SVGSVGElement> {
    data: number[];
    width?: number;
    height?: number;
}
declare function Sparkline({ data, width, height, className, ...props }: SparklineProps): React.JSX.Element | null;
interface MetricProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: React.ReactNode;
    delta?: {
        value: string;
        direction: "up" | "down";
    };
    data?: number[];
}
declare const Metric: React.ForwardRefExoticComponent<MetricProps & React.RefAttributes<HTMLDivElement>>;

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    grain?: boolean;
}
declare function AuroraBackground({ grain, className, style, ...props }: AuroraBackgroundProps): React.JSX.Element;

declare const Container: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const Grid: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const Masthead: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
declare function MastheadBrand({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
declare function MastheadNav({ className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element;
interface MastheadLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
}
declare const MastheadLink: React.ForwardRefExoticComponent<MastheadLinkProps & React.RefAttributes<HTMLAnchorElement>>;
declare function MastheadActions({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;

declare const Sidebar: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
declare function SidebarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>): React.JSX.Element;
interface SidebarLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    active?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
}
declare const SidebarLink: React.ForwardRefExoticComponent<SidebarLinkProps & React.RefAttributes<HTMLAnchorElement>>;

export { AuroraBackground, type AuroraBackgroundProps, Badge, type BadgeProps, Button, type ButtonProps, Card, type CardProps, Combobox, type ComboboxOption, type ComboboxProps, Container, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Grid, Input, type InputProps, Label, List, ListItem, type ListItemProps, Masthead, MastheadActions, MastheadBrand, MastheadLink, type MastheadLinkProps, MastheadNav, Metric, type MetricProps, Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, Sidebar, SidebarLink, type SidebarLinkProps, SidebarNav, Sparkline, type SparklineProps, THEME_STORAGE_KEY, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, type Theme, ThemeToggle, type ThemeToggleProps, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, badgeVariants, buttonVariants, cardVariants, cn, focusRing, getTheme, glassSurface, microTransition, setTheme, themeInitScript, useTheme };
