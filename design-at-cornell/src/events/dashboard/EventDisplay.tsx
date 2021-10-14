import React from 'react';
import { EventContainer, Settings, TagsContainer, Tag, Link } from '../EventsStyles';
import { Event } from '../Events';
import time from '../../static/images/time.svg';
import loc from '../../static/images/location.svg';
import { buttons } from '../../constants/eventButtons';

const EventDisplay = (event: Event) => (
  <EventContainer>
    <h1>{event.name}</h1>
    <Settings>
      <img src={time} alt="time" />
      <p>{formatRange(event.startTime, event.endTime)}</p>
      <img src={loc} alt="location" />
      <p>{event.location}</p>
    </Settings>
    <TagsContainer>
      {event.tags.map((tag) => (
        <Tag key={tag}>
          <p>{tag}</p>
        </Tag>
      ))}
    </TagsContainer>
    <p>{event.description}</p>
    <TagsContainer>
      {event.links.map((link) => (
        <Link key={link} shadowColor={buttons[link].color}>
          <img src={buttons[link].icon} alt={link} />
          <p>{buttons[link].name}</p>
        </Link>
      ))}
    </TagsContainer>
  </EventContainer>
);

const formatRange = (start: Date, end: Date) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'long',
  });
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });
  const startDate = dateFormatter.format(start);
  const startTime = timeFormatter.format(start);
  const endDate = dateFormatter.format(end);
  const endTime = timeFormatter.format(end);
  if (startDate === endDate) {
    return startDate + ', ' + startTime + ' - ' + endTime;
  }
  return startDate + ', ' + startTime + ' - ' + endDate + ', ' + endTime;
};

export default EventDisplay;
