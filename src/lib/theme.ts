import * as React from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "ds-theme";

// Inline this in <head> before paint to avoid a theme flash. Reads the stored
// theme or the system preference and sets data-theme on <html>.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export function getTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function setTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures (private mode, disabled storage).
  }
}

// Returns the current theme and a toggle. Null until mounted so SSR markup
// matches the client before the theme is read.
export function useTheme(): { theme: Theme | null; toggle: () => void } {
  const [theme, setThemeState] = React.useState<Theme | null>(null);

  React.useEffect(() => {
    setThemeState(getTheme());
  }, []);

  const toggle = React.useCallback(() => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  }, []);

  return { theme, toggle };
}
