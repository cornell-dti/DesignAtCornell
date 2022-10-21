import React from 'react';
import { EventContainer, Settings } from '../../events/EventsStyles';
import { Event } from '../../../../server/src/types';
import time from '../../static/images/time.svg';


const HomepageEventDisplay = (event: Event) => (
  <EventContainer>
    <Settings>
      <p>
        {new Date(event.date).toLocaleString('en', {
          month: 'short',
          day: 'numeric',
        })}
      </p>
    </Settings>
    <h1>{event.title}</h1>
    <Settings>
      <img src={time} alt="time" />
      <p>
        {new Date(event.date).toLocaleString('en', {
          hour: 'numeric',
          minute: 'numeric',
        })}
      </p>
    </Settings>
  </EventContainer>
);

export default HomepageEventDisplay;
