import { FC } from "react";
import { EventRes } from "../../helpers/types";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: EventRes;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <li className="eventCard">
      <div className="eventCard__wrapper">
        <h3 className="eventCard__title">{event.title}</h3>
        <p className="eventCard__description">{event.description}</p>
        <Link
          to={`/events/${event._id}/register`}
          className="eventCard__btn-register"
        >
          Register
        </Link>
        <Link
          to={`/events/${event._id}/participants`}
          className="eventCard__btn-view"
        >
          View
        </Link>
      </div>
    </li>
  );
};

export default EventCard;
