import React, { useState, useEffect } from 'react';
import { VerticalFlex } from '../components/ContainerStyles';
import { EventList } from './EventsStyles';
import Title from './Title';
import Filter from './dashboard/Filter';
import EventDisplay from './dashboard/EventDisplay';
import { Event } from '../../../server/types';
import axios from 'axios';

const Events = () => {
  useEffect(() => {
    axios
      .get('http://localhost:3000/getEvents')
      .then((res) => res.data)
      .then(FormatEvents);
  }, []);

  const [events, FormatEvents] = useState<Event[]>([]);
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const leftClickHandler = () => setYear(year - 1);
  const rightClickHandler = () => setYear(year + 1);
  const monthClickHandler = (m: number) => setMonth(m);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.getFullYear() * 12 + eventDate.getMonth();
    const filterMonth = year * 12 + month;
    return eventMonth === filterMonth;
  });

  const eventDisplay = (
    <EventList>
      {filteredEvents.map((event) => (
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
      />
      {eventDisplay}
    </VerticalFlex>
  );
};

export default Events;
