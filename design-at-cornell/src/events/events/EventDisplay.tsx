import React from 'react';
import {
  EventContainer,
  Settings,
  TagsContainer,
  Tag,
  Link
} from '../EventsStyles';
import { Event } from '../Events';
import time from '../../static/images/time.svg';
import loc from '../../static/images/location.svg';

const EventDisplay = (event : Event) => (
  <EventContainer>
    <h1>{event.name}</h1>
    <Settings>
      <img src={time} alt="time" />
      <p>{event.time}</p>
      <img src={loc} alt="location" />
      <p>{event.location}</p>
    </Settings>
    {/* <h2>{event.time + ' ' + event.location}</h2> */}
    <TagsContainer>
      {event.tags.map(tag => (
        <Tag key={tag}>
          <p>{tag}</p>
        </Tag>
      ))}
    </TagsContainer>
    <p>{event.description}</p>
    <TagsContainer>
      {event.links.map(link => (
        <Link key={link}>
          <p>{link}</p>
        </Link>
      ))}
    </TagsContainer>
  </EventContainer>
)

export default EventDisplay;
