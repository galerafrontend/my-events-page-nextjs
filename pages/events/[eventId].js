import { useRouter } from "next/router";
import EventContent from "../../components/eventDetail/EventContent/eventContent";
import EventLogistics from "../../components/eventDetail/EventLogistics/EventLogistics";
import EventSummary from "../../components/eventDetail/EventSummary/EventSummary";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <div>Event not found !!!</div>;
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
