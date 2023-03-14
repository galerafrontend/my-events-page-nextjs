import EventsList from "../components/events/EventsList/EventsList";
import { getFeaturedEvents } from "../helpers/apiUtil";
import Head from "next/head";
import NewsletterRegistration from "../components/input/NewsletterRegistration/NewsletterRegistration";
import { useLoading } from "../useLoading";

const HomePage = ({ events }) => {
  const loader = useLoading();

  if (loader) {
    return <p className="center">Loading...</p>;
  }

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
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
    revalidate: 1800,
  };
};

export default HomePage;
