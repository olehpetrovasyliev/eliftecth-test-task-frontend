import { FC } from "react";
import { ParticipantRes } from "../../helpers/types";
import ParticipantCard from "../participantCard/ParticipantCard";

type ParticipantsListProps = { list: ParticipantRes[] };

const ParticipantsList: FC<ParticipantsListProps> = ({ list }) => {
  return (
    <ul className="eventsList">
      {list.map((participant) => (
        <ParticipantCard participant={participant} key={participant._id} />
      ))}
    </ul>
  );
};

export default ParticipantsList;
