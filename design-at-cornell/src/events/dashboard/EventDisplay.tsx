import React from 'react';
import { EventContainer, Settings, EventLink } from '../EventsStyles';
import { Event } from '../../../../server/src/types';
import time from '../../static/images/time.svg';
import loc from '../../static/images/location.svg';
import linkIcon from '../../static/images/link-icon.svg';

const EventDisplay = (event: Event) => (
  <EventContainer>
    <h1>{event.title}</h1>
    <Settings>
      <span>
        <img src={time} alt="time" />
        <p>
          {new Date(event.date).toLocaleString('en', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
      </span>
      {event.location.length === 0 ? null : (
        <span>
          <img src={loc} alt="location" />
          <p>{event.location}</p>
        </span>
      )}
    </Settings>
    <p>{event.description}</p>

    <EventLink onClick={() => window.open(event.url)}>
      <img src={linkIcon} alt={event.url} />
      <p>{'Event Link'}</p>
    </EventLink>
  </EventContainer>
);

export default EventDisplay;
