import React, { useEffect, useState } from "react";
import EventsList from "../components/eventsList/EventsList";
import { getAllEvents } from "../helpers/api";
import Select from "react-select";
import { EventRes, SortBy, SortDirection } from "../helpers/types";

const Home = () => {
  const [events, setEvents] = useState<EventRes[] | []>([]);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<SortBy>("event_date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("inc");
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEventsData = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchEventsData();
    }
  }, [page, sortBy, sortDirection]);

  const sortByOptions = [
    { value: "event_date", label: "Sort by Date" },
    { value: "title", label: "Sort by Name" },
    { value: "organizer", label: "Sort by Organizer" },
  ];

  const sortDirectionOptions = [
    { value: "inc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];

  const loadMore = () => setPage((prev) => prev + 1);

  const handleSortByChange = (selectedOption: any) => {
    setSortBy(selectedOption.value);
    setEvents([]);
    setPage(1);
  };

  const handleSortDirectionChange = (selectedOption: any) => {
    setSortDirection(selectedOption.value);
    setEvents([]);
    setPage(1);
  };

  return (
    <section className="home">
      <div className="home__wrapper">
        <h1 className="home__title">Events</h1>

        <div className="home__sortControls">
          <Select
            options={sortByOptions}
            value={sortByOptions.find((option) => option.value === sortBy)}
            onChange={handleSortByChange}
            placeholder="Sort by..."
          />
          <Select
            options={sortDirectionOptions}
            value={sortDirectionOptions.find(
              (option) => option.value === sortDirection
            )}
            onChange={handleSortDirectionChange}
            placeholder="Sort direction..."
          />
        </div>
        <EventsList list={events} />
        {loading && <p>Loading...</p>}
        {hasMore && (
          <button onClick={loadMore} className="home__btn-loadmore">
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Home;
