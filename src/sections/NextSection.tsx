// src/sections/NextSection.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Card } from "../components/Card";

export function NextSection() {
  return (
    <section className="next-section">
      <Wrapper as="div" pad="clamp(32px,6vw,96px)" gap="var(--space-6)">
        <h2 className="next-heading">What’s Happening Next...?</h2>

        <Card>
          <Card.Header>
            <h3 style={{ fontSize: "var(--size-md)", fontWeight: 700 }}>
              Yearly Membership in AILÈ
            </h3>
          </Card.Header>
          <Card.Body>
            <p style={{ fontSize: "var(--size-sm)" }}>15 September 2024, 18:00</p>
            <p style={{ fontSize: "var(--size-sm)" }}>
              Kopparbergsgatan 29, 214 44, Malmö
            </p>
          </Card.Body>
          <Card.Footer>
            <button
              style={{
                background: "var(--accent)",
                color: "var(--ink)",
                padding: "12px 16px",
                border: 0,
                borderRadius: "10px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Skaffa biljetter
            </button>
          </Card.Footer>
        </Card>
      </Wrapper>
    </section>
  );
}
