import React from 'react';
import { EventContainer, Settings, TagsContainer, Link } from '../EventsStyles';
import { Event } from '../../../../server/types';
import time from '../../static/images/time.svg';
import loc from '../../static/images/location.svg';
import { buttons } from '../../constants/eventButtons';
import Events from '../Events';

const EventDisplay = (event: Event) => (
  <EventContainer>
    <h1>{event.title}</h1>
    <Settings>
      <img src={time} alt="time" />
      <p>{event.date.substring(0,10) + " " + event.date.substring(11,16) + event.date.substring(19) }</p>
      <img src={loc} alt="location" />
      <p>{event.location}</p>
    </Settings>
    <p>{event.description}</p>
    <Link key={event.url} shadowColor={buttons[event.url]?.color}>
      <img src={buttons[event.url]?.icon} alt={event.url} />
      <p>{buttons[event.url]?.name}</p>
    </Link> 
 
  </EventContainer>
);

export default EventDisplay;
