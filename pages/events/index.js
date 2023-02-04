import EventsList from "../../components/events/EventsList/EventsList";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventsList items={events} />
    </div>
  );
};

export default AllEventsPage;
