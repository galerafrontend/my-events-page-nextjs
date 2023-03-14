import { useRouter } from "next/router";
import EventsList from "../../components/events/EventsList/EventsList";
import EventsSearch from "../../components/events/EventsSearch/EventsSearch";
import { getAllEvents } from "../../helpers/apiUtil";
import { useLoading } from "../../useLoading";

const AllEventsPage = ({ events }) => {
  const loader = useLoading();
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  if (loader) {
    return <p className="center">Loading...</p>;
  }

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventsList items={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
