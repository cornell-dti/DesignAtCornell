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
      .then((res) => res.data.data)
      .then(FormatEvents);
  }, []);
  
  const [event, FormatEvents] = useState<Event[]>([]);
  const date = new Date();

  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const leftClickHandler = () => setYear(year - 1);
  const rightClickHandler = () => setYear(year + 1);
  const monthClickHandler = (m: number) => setMonth(m);

  const filteredEvents = event.filter((event) => {
    const event_date = new Date(event.date);
    const start = event_date.getFullYear() * 12 + event_date.getMonth();
    const end = event_date.getFullYear() * 12 + event_date.getMonth();
    const cur = year * 12 + month;
    return start <= cur && cur <= end;
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
