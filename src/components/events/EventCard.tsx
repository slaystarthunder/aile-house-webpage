// src/components/events/EventCard.tsx
import type { FC } from "react";

export type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description?: string;
  ctaLabel?: string;
};

const EventCard: FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  ctaLabel = "More info",
}) => {
  return (
    <article className="event-card">
      <h3 className="panel-title">{title}</h3>

      <p className="panel-text event-meta">{date}</p>
      <p className="panel-text event-meta">{location}</p>

      {description && <p className="panel-text">{description}</p>}

      <div className="event-card-footer">
        <button className="button-accent">{ctaLabel}</button>
      </div>
    </article>
  );
};

export default EventCard;
