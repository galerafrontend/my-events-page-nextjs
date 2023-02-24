import EventContent from "../../components/eventDetail/EventContent/eventContent";
import EventLogistics from "../../components/eventDetail/EventLogistics/EventLogistics";
import EventSummary from "../../components/eventDetail/EventSummary/EventSummary";
import Button from "../../components/ui/Button/Button";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";
import { getEventById, getAllEvents } from "../../helpers/apiUtil";

const EventDetailPage = ({ selectedEvent }) => {
  const event = selectedEvent;

  if (!event) {
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
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((event) => ({
    params: {
      eventId: event.id,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export default EventDetailPage;
