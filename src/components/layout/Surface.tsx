// src/components/layout/Surface.tsx
import type { HTMLAttributes } from "react";

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  elevation?: "flat" | "elevated";
  tone?: "light" | "dark";
  padding?: "none" | "md";
};

export function Surface({
  elevation = "elevated",
  tone = "dark",
  padding = "md",
  className,
  ...rest
}: SurfaceProps) {
  const classes = [
    "surface",
    elevation === "elevated" ? "surface--elevated" : "surface--flat",
    tone === "dark" ? "surface--dark" : "surface--light",
    padding === "md" ? "surface--pad-md" : "surface--pad-none",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes} {...rest} />;
}
