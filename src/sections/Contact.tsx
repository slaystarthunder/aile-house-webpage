// src/sections/Contact.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Surface } from "../components/layout/Surface";

export default function Contact() {
  return (
    <Wrapper
      as="section"
      id="contact"
      aria-labelledby="contact-title"
      gap="var(--space-6)"
      pad="var(--space-8)"
    >
      <Surface elevation="elevated" tone="dark" padding="md">
        {/* Section header */}
        <header className="pad-md pad-none">
          <p className="eyebrow">Contact & Info</p>
          <h2 id="contact-title" className="panel-title">
            Get in touch or visit us
          </h2>
          <p className="panel-text">
            Questions, ideas, collaborations or bookings – we&apos;d love to
            hear from you.
          </p>
        </header>

        {/* Contact content */}
        <div
          className="pad-md"
          style={{
            display: "grid",
            gap: "var(--space-4)",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <article>
            <h3 className="panel-title">Visit</h3>
            <p className="panel-text">
              Ailé House<br />
              Street name 00<br />
              000 00 City
            </p>
          </article>

          <article>
            <h3 className="panel-title">Contact</h3>
            <p className="panel-text">
              General: <a href="mailto:info@ailehouse.se">info@ailehouse.se</a>
              <br />
              Bookings:{" "}
              <a href="mailto:bookings@ailehouse.se">
                bookings@ailehouse.se
              </a>
            </p>
          </article>

          <article>
            <h3 className="panel-title">Social</h3>
            <p className="panel-text">
              Instagram: @ailehouse<br />
              Facebook: Ailé House<br />
              (Replace with real links)
            </p>
          </article>
        </div>
      </Surface>
    </Wrapper>
  );
}
