import EventItem from "./EventItem";

const EventsList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventsList;
