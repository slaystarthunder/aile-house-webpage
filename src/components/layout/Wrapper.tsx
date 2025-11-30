// src/components/layout/Wrapper.tsx
import type {
  ReactNode,
  CSSProperties,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

type WrapperOwnProps<T extends ElementType> = {
  as?: T;
  max?: string;
  gap?: string;
  pad?: string;
  style?: CSSProperties;
  children: ReactNode;
};

type WrapperProps<T extends ElementType> = WrapperOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof WrapperOwnProps<T>>;

export function Wrapper<T extends ElementType = "section">({
  as,
  max = "var(--container-lg)",
  gap = "var(--space-6)",
  pad = "var(--space-8)",
  style,
  children,
  ...rest
}: WrapperProps<T>) {
  const As = (as ?? "section") as ElementType;
  return (
    <As
      style={{
        position: "relative",
        zIndex: "var(--z-content)",
        maxWidth: max,
        marginInline: "auto",
        padding: pad,
        display: "grid",
        gap,
        ...style,
      }}
      {...rest}
    >
      {children}
    </As>
  );
}
