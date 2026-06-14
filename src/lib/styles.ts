// Shared class fragments used across components.

// 2px ink focus ring, 2px offset, per the components spec.
export const focusRing =
  "outline-none focus-visible:[outline:2px_solid_var(--on-surface)] focus-visible:outline-offset-2";

// Glass surface (Level 1). Adds the reduced-transparency fallback inline so the
// component does not depend on recipes.css being loaded.
export const glassSurface =
  "bg-[var(--glass-fill)] border border-[var(--glass-border)] [backdrop-filter:blur(var(--glass-blur))_saturate(1.1)] [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(1.1)] [@media(prefers-reduced-transparency:reduce)]:bg-surface-container [@media(prefers-reduced-transparency:reduce)]:[backdrop-filter:none]";

export const microTransition =
  "transition-[opacity,transform,background-color,color,border-color] duration-[var(--dur-micro)] ease-[var(--ease)] motion-reduce:transition-none";
