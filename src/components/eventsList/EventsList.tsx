import { FC } from "react";
import { EventRes } from "../../helpers/types";
import EventCard from "../eventCard/EventCard";

type EventsListProps = { list: EventRes[] };

const EventsList: FC<EventsListProps> = ({ list }) => {
  return (
    <ul className="eventsList">
      {list.map((event) => (
        <EventCard event={event} key={event._id} />
      ))}
    </ul>
  );
};

export default EventsList;
