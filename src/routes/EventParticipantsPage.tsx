import { FC, useEffect, useState } from "react";
import { EventDetailedRes } from "../helpers/types";
import { useParams } from "react-router-dom";
import { getEventById } from "../helpers/api";
import ParticipantsList from "../components/participantsList/ParticipantsList";

const EventParticipantsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetailedRes | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          const { data } = await getEventById(id);
          setEvent(data);
        } catch (error) {
          console.error("Error fetching event:", error);
        }
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <section className="eventPage">
      <div className="eventPage__wrapper">
        <h1 className="eventPage__title">{event.title}</h1>
        <ParticipantsList list={event.participants} />
      </div>
    </section>
  );
};

export default EventParticipantsPage;
