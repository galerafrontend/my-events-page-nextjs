import EventItem from "../EventItem/EventItem";
import classes from "./styles.module.css";

const EventsList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
};

export default EventsList;
