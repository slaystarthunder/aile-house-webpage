// src/sections/Community.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Surface } from "../components/layout/Surface";

export default function Community() {
  return (
    <Wrapper
      as="section"
      id="community"
      aria-labelledby="community-title"
      gap="var(--space-6)"
      pad="var(--space-8)"
    >
      <Surface elevation="elevated" tone="dark" padding="md">

        {/* Section header */}
        <header className="pad-md pad-none">
          <p className="eyebrow">Community</p>

          <h2 id="community-title" className="panel-title">
            Inclusive spaces for learning, social connection & growth
          </h2>

          <p className="panel-text">
            Ailé House as a community hub – for workshops, study circles,
            social events and everyday hanging out.
          </p>
        </header>

        {/* Content cards */}
        <div className="info-grid pad-md">

          <article className="info-card hover-lift">
            <h3 className="panel-title">Workshops for All</h3>
            <p className="panel-text">
              Open sessions where community members share knowledge, creative
              practices and skills.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Study Circles & Discussions</h3>
            <p className="panel-text">
              Reading groups, talks and circles around queer culture, politics
              and lived experience.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Member Café & Hangouts</h3>
            <p className="panel-text">
              Soft space for fika, board games, quiet co-working and small
              gatherings.
            </p>
          </article>

          <article className="info-card hover-lift">
            <h3 className="panel-title">Community-Led Initiatives</h3>
            <p className="panel-text">
              Projects that start from the community itself – we support ideas
              with space, coordination and visibility.
            </p>
          </article>

        </div>

      </Surface>
    </Wrapper>
  );
}
