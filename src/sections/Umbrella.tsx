// src/sections/Umbrella.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Surface } from "../components/layout/Surface";

export default function Umbrella() {
  return (
    <Wrapper
      as="section"
      id="umbrella"
      aria-labelledby="umbrella-title"
      gap="var(--space-6)"
      pad="var(--space-8)"
    >
      <Surface elevation="elevated" tone="dark" padding="md">

        {/* Section header */}
        <header className="pad-md pad-none">
          <p className="eyebrow">Umbrella</p>

          <h2 id="umbrella-title" className="panel-title">
            Supporting projects, collaborations & impact
          </h2>

          <p className="panel-text">
            Ailé House as an umbrella for external projects, partners and
            initiatives that share our values.
          </p>
        </header>

        {/* Content cards */}
        <div className="info-grid pad-md">
          <article className="info-card hover-lift">
            <h3 className="panel-title">Partnerships</h3>
            <p className="panel-text">
              Collaboration with organisations, collectives and institutions
              that align with Ailé&apos;s mission.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">External Events</h3>
            <p className="panel-text">
              Hosting and co-producing events initiated from outside the
              house but rooted in our community.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Supported Initiatives</h3>
            <p className="panel-text">
              Providing space, infrastructure and visibility for queer and
              community-focused projects.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Collective Impact</h3>
            <p className="panel-text">
              Connecting projects and people to build long-term impact together.
            </p>
          </article>
        </div>

      </Surface>
    </Wrapper>
  );
}
