// src/components/events/EventList.tsx
import type { FC } from "react";
import EventCard from "./EventCard";
import type { EventCardProps } from "./EventCard";

const mockEvents: EventCardProps[] = [
  {
    title: "Yearly Membership in AILÉ",
    date: "15 September 2024, 18:00",
    location: "Kopparbergsgatan 29, 214 44 Malmö",
    description:
      "Launch gathering, info, mingling and a first look at the house.",
    ctaLabel: "Get tickets",
  },
  {
    title: "Queer House: Opening Night",
    date: "28 September 2024, 19:00",
    location: "Ailé House – Main Room",
    description:
      "Performances, music and soft hangouts to open the Queer House season.",
    ctaLabel: "Reserve spot",
  },
  {
    title: "Community Workshop: Creative Study Circle",
    date: "5 October 2024, 17:30",
    location: "Ailé House – Studio",
    description:
      "Co-created workshop around learning, sharing and artistic practice.",
    ctaLabel: "Sign up",
  },
];

const EventList: FC = () => {
  return (
    <div className="event-grid">
      {mockEvents.map((event) => (
        <EventCard key={event.title} {...event} />
      ))}
    </div>
  );
};

export default EventList;
