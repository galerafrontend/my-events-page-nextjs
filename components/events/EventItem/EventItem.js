import AddressIcon from "../../icons/addressIcon";
import ArrowRightIcon from "../../icons/arrowRightIcon";
import DateIcon from "../../icons/dateIcon";
import Button from "../../ui/Button";
import classes from "./styles.module.css";

const EventItem = ({ id, title, image, date, location }) => {
  const formmatedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const addressText = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={classes.date}>
            <DateIcon />
            <time>{formmatedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{addressText}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>
              Explore Link <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
