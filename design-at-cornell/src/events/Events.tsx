import React, { useState, useEffect } from 'react';
import { VerticalFlex, ShowContainer, Spinner } from '../components/ContainerStyles';
import { EventList } from './EventsStyles';
import Title from './Title';
import Filter from './dashboard/Filter';
import EventDisplay from './dashboard/EventDisplay';
import { LoadingEvents } from '../../../server/src/types';
import api from '../constants/util';
import Pagination from '../pagination/Pagination';

const Events = () => {
  const [state, setState] = useState<LoadingEvents>({
    loading: false,
    events: [],
  });

  useEffect(() => {
    setState({ loading: true, events: [] });
    api
      .get('/getEvents')
      .then((res) => res.data)
      .then((events) => setState({ loading: false, events: events }));
  }, []);

  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [currentPage, setPage] = useState(1);

  const leftClickHandler = () => setYear(year - 1);
  const rightClickHandler = () => setYear(year + 1);
  const monthClickHandler = (m: number) => setMonth(m);

  const filteredEvents = state.events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.getFullYear() * 12 + eventDate.getMonth();
    const filterMonth = year * 12 + month;
    return eventMonth === filterMonth;
  });

  const eventsPerPage = 5;
  const lastEventIdx = currentPage * eventsPerPage;
  const firstEventIdx = lastEventIdx - eventsPerPage;
  const displayedEvents = filteredEvents.slice(firstEventIdx, lastEventIdx);

  const eventDisplay = (
    <EventList>
      {displayedEvents.map((event) => (
        <EventDisplay key={event.title} {...event} />
      ))}
    </EventList>
  );

  const LoadingIndicator = () => {
    return <Spinner />;
  };

  const EventsPage = () => {
    return (
      <VerticalFlex>
        <Filter
          month={month}
          year={year}
          leftClickHandler={leftClickHandler}
          rightClickHandler={rightClickHandler}
          monthClickHandler={monthClickHandler}
          setPage={setPage}
        />
        {eventDisplay}
        <ShowContainer show={filteredEvents.length - eventsPerPage > 0}>
          <Pagination
            currentPage={currentPage}
            cardsPerPage={eventsPerPage}
            totalCards={filteredEvents.length}
            paginate={setPage}
          />
        </ShowContainer>
      </VerticalFlex>
    );
  };

  return (
    <VerticalFlex>
      <Title />
      {state.loading && <LoadingIndicator />}
      {!state.loading && <EventsPage />}
    </VerticalFlex>
  );
};

export default Events;
