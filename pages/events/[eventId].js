import { useRouter } from "next/router";
import EventContent from "../../components/eventDetail/EventContent/eventContent";
import EventLogistics from "../../components/eventDetail/EventLogistics/EventLogistics";
import EventSummary from "../../components/eventDetail/EventSummary/EventSummary";
import Button from "../../components/ui/Button/Button";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

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

export default EventDetailPage;
