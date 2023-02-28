import EventsList from "../../components/events/EventsList/EventsList";
import { getFilteredEvents } from "../../helpers/apiUtil";
import ResultsTitle from "../../components/events/ResultsTitle/ResultsTitle";
import ErrorAlert from "../../components/ui/ErrorAlert/ErrorAlert";
import Button from "../../components/ui/Button/Button";
import Head from "next/head";

const FilteredEventsPage = ({ hasError, events, numberDate }) => {
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        content={`All events for ${numberDate.month}/${numberDate.year}.`}
      />
    </Head>
  );

  if (hasError) {
    return (
      <>
        {pageHeadData}
        <div className="center">
          <ErrorAlert>Invalid filter. Please adjust your values.</ErrorAlert>
          <Button link="/events">Back to all events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        {pageHeadData}
        <div className="center">
          <ErrorAlert>No events found for the chosen filter!</ErrorAlert>
          <Button link="/events">Back to all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numberDate.year, numberDate.month - 1);

  return (
    <>
      {pageHeadData}
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const filterData = context.params.slug;

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
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  });

  return {
    props: {
      events: filteredEvents,
      numberDate: {
        year: numberYear,
        month: numberMonth,
      },
    },
  };
};

export default FilteredEventsPage;
