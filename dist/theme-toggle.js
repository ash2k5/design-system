// Framework-agnostic theme control. Themes are driven by data-theme on <html>.
// To avoid a flash of the wrong theme, inline THEME_INIT_SNIPPET in <head>
// before stylesheets; call initTheme()/toggleTheme() from app code.
const KEY = "ds-theme";

export function getStored() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function resolveTheme() {
  return getStored() || systemTheme();
}

export function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function setTheme(theme) {
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    // storage unavailable; theme still applies for this session
  }
  applyTheme(theme);
}

export function currentTheme() {
  return document.documentElement.getAttribute("data-theme") || resolveTheme();
}

export function toggleTheme() {
  const next = currentTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  return next;
}

export function initTheme() {
  applyTheme(resolveTheme());
}

// Inline this string in <head> before paint to prevent a theme flash.
export const THEME_INIT_SNIPPET =
  "(function(){try{var t=localStorage.getItem('ds-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();";
