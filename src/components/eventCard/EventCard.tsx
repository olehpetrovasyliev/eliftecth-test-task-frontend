import  { FC } from "react";
import { EventRes } from "../../helpers/types";

interface EventCardProps {
  event: EventRes;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <li className="containerCard">
      <div className="containerCard__wrapper">
        <h3 className="containerCard__title">{event.title}</h3>
        <p className="containercard__description">{event.description}</p>
        <button className="containerCard__btn-register">Register</button>
        <button className="containerCard__btn-view">View</button>
      </div>
    </li>
  );
};

export default EventCard;
