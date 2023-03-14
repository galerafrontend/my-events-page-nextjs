import EventContent from "../../components/eventDetail/EventContent/eventContent";
import EventLogistics from "../../components/eventDetail/EventLogistics/EventLogistics";
import EventSummary from "../../components/eventDetail/EventSummary/EventSummary";
import Button from "../../components/ui/Button/Button";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";
import { getEventById, getFeaturedEvents } from "../../helpers/apiUtil";
import Head from "next/head";
import Comments from "../../components/input/Comments/Comments";
import { useLoading } from "../../useLoading";

const EventDetailPage = ({ selectedEvent, hasError }) => {
  const loader = useLoading();
  const event = selectedEvent;

  if (loader) {
    return <p className="center">Loading...</p>;
  }

  if (!event || hasError) {
    return (
      <>
        <div className="center">
          <ErrorAlert>Event not found !!!</ErrorAlert>
          <Button link="/events">Back to all events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  if (!event) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default EventDetailPage;
