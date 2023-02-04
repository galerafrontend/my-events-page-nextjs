import EventsList from "../../components/events/EventsList/EventsList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />    
      <EventsList items={events} />
    </>
  );
};

export default AllEventsPage;
