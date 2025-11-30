// Compound Card with Header/Body/Footer
// - type-only imports to satisfy "verbatimModuleSyntax"

import type { ReactNode, CSSProperties, HTMLAttributes } from "react";

type CardRootProps = {
  style?: CSSProperties;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

function Root({ children, style, ...rest }: CardRootProps) {
  return (
    <article
      style={{
        borderRadius: "var(--radius-lg)",
        background: "#1e1f22",
        color: "#fff",
        boxShadow: "var(--shadow-lg)",
        display: "grid",
        ...style,
      }}
      {...rest}
    >
      {children}
    </article>
  );
}

type SectionProps = {
  children: ReactNode;
  style?: CSSProperties;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

function Header({ children, style, ...rest }: SectionProps) {
  return (
    <header style={{ padding: "var(--space-6)", ...style }} {...rest}>
      {children}
    </header>
  );
}

function Body({ children, style, ...rest }: SectionProps) {
  return (
    <div
      style={{
        padding: "var(--space-6)",
        display: "grid",
        gap: "var(--space-4)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

function Footer({ children, style, ...rest }: SectionProps) {
  return (
    <footer style={{ padding: "var(--space-6)", ...style }} {...rest}>
      {children}
    </footer>
  );
}

// Create the compound API: Card, Card.Header, Card.Body, Card.Footer
export const Card = Object.assign(Root, { Header, Body, Footer });
export type { CardRootProps, SectionProps };
