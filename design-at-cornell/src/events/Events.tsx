import React, { useState, useEffect } from 'react';
import { VerticalFlex, ShowContainer } from '../components/ContainerStyles';
import { EventList } from './EventsStyles';
import Title from './Title';
import Filter from './dashboard/Filter';
import EventDisplay from './dashboard/EventDisplay';
import { Event } from '../../../server/src/types';
import api from '../constants/util';
import Pagination from '../pagination/Pagination';

const Events = () => {
  useEffect(() => {
    api
      .get('/getEvents')
      .then((res) => res.data)
      .then(FormatEvents);
  }, []);

  const [events, FormatEvents] = useState<Event[]>([]);
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());
  const [currentPage, setPage] = useState(1);

  const leftClickHandler = () => setYear(year - 1);
  const rightClickHandler = () => setYear(year + 1);
  const monthClickHandler = (m: number) => setMonth(m);

  const filteredEvents = events.filter((event) => {
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

  return (
    <VerticalFlex>
      <Title />
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

export default Events;
