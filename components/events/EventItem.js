import Link from "next/link";

const EventItem = ({ id, title, image, date, location }) => {
  const formmatedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formmatedAddress = location.replace(",", "/n");

  const exploreLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{formmatedDate}</time>
        </div>
        <div>
          <address>{formmatedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLink}>Explore event</Link>
      </div>
    </li>
  );
};

export default EventItem;
