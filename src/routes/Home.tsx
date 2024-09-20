import React, { useEffect, useState } from "react";
import EventsList from "../components/eventsList/EventsList";
import { getAllEvents } from "../helpers/api";
import { EventRes, SortBy, SortDirection } from "../helpers/types";

const Home = () => {
  const [events, setEvents] = useState<EventRes[] | []>([]);
  const [page, setPage] = useState<number>(1);

  const [sortBy, setSortBy] = useState<SortBy>("event_date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("inc");
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const { data } = await getAllEvents({
          page,
          sortBy,
          sortDirection,
        });
        if (page === 1) {
          setEvents(data.results);
        } else {
          setEvents((prevEvents) => [...prevEvents, ...data.results]);
        }
        setHasMore(data.page < data.totalPages);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    if (hasMore) {
      fetchEventsData();
    }
  }, [page, sortBy, sortDirection]);

  const loadMore = () => setPage((prev) => prev + 1);

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortBy);
    setEvents([]);
    setPage(1);
  };

  const handleSortDirectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortDirection(event.target.value as SortDirection);
    setEvents([]);
    setPage(1);
  };

  return (
    <section className="home">
      <div className="home__wrapper">
        <h1>Events</h1>

        <div className="home__sortControls">
          <select onChange={handleSortByChange} value={sortBy}>
            <option value="event_date">Sort by Date</option>
            <option value="title">Sort by Name</option>
            <option value="organizer">Sort by Organizer</option>
          </select>
          <select onChange={handleSortDirectionChange} value={sortDirection}>
            <option value="inc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <EventsList list={events} />
        {hasMore && <button onClick={loadMore}>more</button>}
      </div>
    </section>
  );
};

export default Home;
