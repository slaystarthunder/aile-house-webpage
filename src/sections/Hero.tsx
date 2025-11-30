// src/sections/Hero.tsx
import { Wrapper } from "../components/layout/Wrapper";

export default function Hero() {
  return (
    <header
      id="home"
      className="site-hero"
      role="banner"
      aria-labelledby="hero-title"
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-hero)",
        background: "var(--brand-yellow)",
        minHeight: "80vh",
      }}
    >
      <Wrapper
        as="div"
        pad="clamp(24px, 4vw, 64px)"
        gap="var(--space-6)"
        style={{
          minHeight: "70vh",
          display: "grid",
          alignContent: "start",
          justifyItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        <p className="eyebrow">
          Ailé of Sweden <strong>welcomes</strong> YOU to
        </p>

        <h1 id="hero-title" className="title">
          Ailé House
        </h1>

        <span className="underline" aria-hidden />

        {/* Optional CTA (ready when you want it) */}
        {/* 
        <button className="cta-primary">
          Explore the house
        </button>
        */}
      </Wrapper>

      {/* Bottom shadow fade */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "72px",
          boxShadow: "0 -40px 60px -20px rgba(0,0,0,.25) inset",
          pointerEvents: "none",
        }}
      />
    </header>
  );
}
