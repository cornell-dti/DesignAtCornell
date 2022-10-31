import React, { useState, useEffect } from 'react';
import { ListsEvents } from '../../components/HomepageStyles';
import HomepageEventDisplay from './HomepageEventDisplay';
import { Event } from '../../../../server/src/types';
import api from '../../constants/util';

const HomepageFunctions = () => {
  useEffect(() => {
    api
      .get('/getEvents')
      .then((res) => res.data)
      .then(FormatEvents);
  }, []);

  const [events, FormatEvents] = useState<Event[]>([]);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventMonth = eventDate.getFullYear() * 12 + eventDate.getMonth();
    const filterMonth = year * 12 + month;
    return eventMonth === filterMonth;
  });

  const homepageDisplay = (
    <ListsEvents>
      {filteredEvents.slice(0, 2).map((event) => (
        <HomepageEventDisplay key={event.title} {...event} />
      ))}
    </ListsEvents>
  );

  return homepageDisplay;
};

export default HomepageFunctions;
