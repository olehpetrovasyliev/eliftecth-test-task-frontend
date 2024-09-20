import { FC } from "react";
import { EventRes, ParticipantRes } from "../../helpers/types";

interface ParticipantCardProps {
  participant: ParticipantRes;
}

const ParticipantCard: FC<ParticipantCardProps> = ({ participant }) => {
  return (
    <li className="participantCard">
      <div className="participantCard__wrapper">
        <h3 className="participantCard__name">{participant.name}</h3>
        <p className="participantCard__mail">{participant.email}</p>
      </div>
    </li>
  );
};

export default ParticipantCard;
