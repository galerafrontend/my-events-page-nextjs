import EventsList from "../../components/events/EventsList/EventsList";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/events/ResultsTitle/ResultsTitle";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";
import Button from "../../components/ui/Button/Button";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numberYear = +filteredYear;
  const numberMonth = +filteredMonth;

  if (
    isNaN(numberYear) ||
    isNaN(numberMonth) ||
    numberYear > 2030 ||
    numberYear < 2021 ||
    numberMonth > 12 ||
    numberMonth < 1
  ) {
    return (
      <>
        <div className="center">
          <ErrorAlert>Invalid filter. Please adjust your values.</ErrorAlert>
          <Button link="/events">Back to all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  const date = new Date(numberYear, numberMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
