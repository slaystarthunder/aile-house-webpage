import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

type Props = {
  /** Extra klasser om du vill positionera/anpassa (valfritt) */
  className?: string;
};

// Accessible, focus-trapped hamburger menu with body scroll lock
export default function HamburgerMenu({ className = "" }: Props) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen(v => !v), []);

  // Lock page scroll when open + focus management
  useEffect(() => {
    const root = document.documentElement;
    if (open) {
      lastFocused.current = (document.activeElement as HTMLElement) ?? null;
      root.style.overflow = "hidden";
      // focus first focusable in panel
      const first = panelRef.current?.querySelector<HTMLElement>(
        'a,button,[tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    } else {
      document.documentElement.style.overflow = "";
      btnRef.current?.focus(); // return focus
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Trap focus inside the panel
  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!open || e.key !== "Tab") return;

    const focusables = panelRef.current
      ? Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'a,button,[tabindex]:not([tabindex="-1"])'
          )
        ).filter(el => !el.hasAttribute("disabled"))
      : [];

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        ref={btnRef}
        type="button"
        className={`hambtn ${open ? "is-open" : ""} ${className}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={toggle}
      >
        <span className="hamicon" aria-hidden />
      </button>

      {/* Backdrop */}
      {open && (
        <div className="menubackdrop" onClick={close} aria-hidden />
      )}

      {/* Slide-in panel */}
      <div
        id="site-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        className={`menupanel ${open ? "open" : ""}`}
        onKeyDown={onKeyDown}
      >
        <nav className="menunav" aria-label="Main">
          <a className="menulink" href="#home" onClick={close}>
            Home
          </a>
          <a className="menulink" href="#queer-house" onClick={close}>
            Queer House
          </a>
          <a className="menulink" href="#community" onClick={close}>
            Community
          </a>
          <a className="menulink" href="#umbrella" onClick={close}>
            Umbrella
          </a>
          <a className="menulink" href="#events" onClick={close}>
            Events
          </a>
          <a className="menulink" href="#contact" onClick={close}>
            Contact
          </a>
        </nav>

        <button
          type="button"
          style={{ marginTop: "auto" }}
          className="menulink"
          onClick={close}
        >
          Close
        </button>
      </div>
    </>
  );
}
