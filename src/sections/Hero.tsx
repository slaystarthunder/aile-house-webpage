// src/sections/Hero.tsx
import { Wrapper } from "../components/layout/Wrapper";

export default function Hero() {
  return (
    <header
      id="home"
      className="site-hero"
      role="banner"
      aria-labelledby="hero-title"
    >
      <Wrapper
        as="div"
        pad="var(--space-4)"
        gap="var(--space-2)"
        style={{
          textAlign: "center",
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
    </header>
  );
}
