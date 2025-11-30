// src/sections/QueerHouse.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Surface } from "../components/layout/Surface";

export default function QueerHouse() {
  return (
    <Wrapper
      as="section"
      id="queer-house"
      aria-labelledby="queer-house-title"
      gap="var(--space-6)"
      pad="var(--space-8)"
    >
      <Surface elevation="elevated" tone="dark" padding="md">

        {/* Section header */}
        <header className="pad-md pad-none">
          <p className="eyebrow">Queer House</p>

          <h2 id="queer-house-title" className="panel-title">
            Performances, workshops & queer celebration
          </h2>

          <p className="panel-text">
            Ailé House’s queer heart – a stage, rehearsal space and home
            for queer artists, audiences and collaborators.
          </p>
        </header>

        {/* Content cards */}
        <div className="info-grid pad-md">
          <article className="info-card hover-lift">
            <h3 className="panel-title">Performances & Shows</h3>
            <p className="panel-text">
              Queer theatre, live music, drag and performance art in an
              intimate, welcoming space.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Workshops & Classes</h3>
            <p className="panel-text">
              Skill-sharing sessions led by queer artists and community
              members – from movement to writing and beyond.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Nights & Celebrations</h3>
            <p className="panel-text">
              Evenings for dancing, soft hangouts, screenings and
              community-focused events.
            </p>
          </article>
        </div>

      </Surface>
    </Wrapper>
  );
}
