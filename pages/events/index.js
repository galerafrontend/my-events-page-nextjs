import { useRouter } from "next/router";
import EventsList from "../../components/events/EventsList/EventsList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventsList items={events} />
    </>
  );
};

export default AllEventsPage;
