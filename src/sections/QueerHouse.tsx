// src/sections/QueerHouse.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Surface } from "../components/layout/Surface";

function QueerHouseHeader() {
  return (
    <header className="section-box-header">
      <p className="eyebrow">Queer House</p>

      <h2 id="queer-house-title" className="panel-title">
        Performances, workshops & queer celebration
      </h2>

      <p className="panel-text">
        Ailé House’s queer heart – a stage, rehearsal space and home for queer
        artists, audiences and collaborators.
      </p>
    </header>
  );
}

function QueerHouseCards() {
  return (
    <div className="qh-card-row">
      <Surface elevation="elevated" tone="dark" padding="none">
        <article className="info-card hover-lift">
          <h3 className="panel-title">Performances & Shows</h3>
          <p className="panel-text">
            Queer theatre, live music, drag and performance art in an intimate,
            welcoming space.
          </p>
        </article>
      </Surface>

      <Surface elevation="elevated" tone="dark" padding="none">
        <article className="info-card hover-lift">
          <h3 className="panel-title">Workshops & Classes</h3>
          <p className="panel-text">
            Skill-sharing sessions led by queer artists and community members –
            from movement to writing and beyond.
          </p>
        </article>
      </Surface>

      <Surface elevation="elevated" tone="dark" padding="none">
        <article className="info-card hover-lift">
          <h3 className="panel-title">Nights & Celebrations</h3>
          <p className="panel-text">
            Evenings for dancing, soft hangouts, screenings and
            community-focused events.
          </p>
        </article>
      </Surface>
    </div>
  );
}

export default function QueerHouse() {
  return (
    <Wrapper
      as="section"
      id="queer-house"
      aria-labelledby="queer-house-title"
      gap="var(--space-6)"
      pad="var(--space-8)"
      className="section-box"
    >
      <QueerHouseHeader />
      <QueerHouseCards />
    </Wrapper>
  );
}
