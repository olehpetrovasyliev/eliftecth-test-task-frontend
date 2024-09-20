import { useEffect, useState } from "react";
import { EventDetailedRes } from "../helpers/types";
import { useParams } from "react-router-dom";
import { getEventById } from "../helpers/api";
import ParticipantsList from "../components/participantsList/ParticipantsList";

const EventParticipantsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetailedRes | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        try {
          const { data } = await getEventById(id);
          setEvent(data);
          console.log(data); // Check if data is coming in correctly
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
    <section>
      <h1 className="eventPage__title">{event.title}</h1>
      <ParticipantsList list={event.participants} />
    </section>
  );
};

export default EventParticipantsPage;
