import EventsList from "../components/events/EventsList/EventsList";
import { getFeaturedEvents } from "../helpers/apiUtil";

const HomePage = ({ events }) => {
  return (
    <div>
      <EventsList items={events} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
