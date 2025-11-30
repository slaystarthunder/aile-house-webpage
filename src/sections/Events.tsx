// src/sections/Events.tsx
import { Wrapper } from "../components/layout/Wrapper";
import { Surface } from "../components/layout/Surface";
import EventList from "../components/events/EventList";

export default function Events() {
  return (
    <Wrapper
      as="section"
      id="events"
      aria-labelledby="events-title"
      gap="var(--space-6)"
      pad="var(--space-8)"
    >
      <Surface elevation="elevated" tone="dark" padding="md">
        <header className="pad-md pad-none">
          <p className="eyebrow">Events</p>
          <h2 id="events-title" className="panel-title">
            What’s happening next at Ailé House
          </h2>
          <p className="panel-text">
            Upcoming happenings across Queer House, Community and Umbrella
            projects.
          </p>
        </header>

        <div className="pad-md">
          <EventList />
        </div>
      </Surface>
    </Wrapper>
  );
}
