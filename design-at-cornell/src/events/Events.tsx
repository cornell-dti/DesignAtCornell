import React, { useState } from 'react';
import { VerticalFlex } from '../components/ContainerStyles';
import { EventList } from './EventsStyles';
import Title from './Title';
import Filter from './dashboard/Filter';
import EventDisplay from './dashboard/EventDisplay';

export type Event = {
  name: string;
  startTime: Date;
  endTime: Date;
  location: string;
  tags: string[];
  description: string;
  links: string[];
};

const Events = () => {
  const [events] = useState<Event[]>([
    {
      name: 'Design Seminar Series with Professor XYZ',
      startTime: new Date(2021, 9, 5, 15),
      endTime: new Date(2021, 9, 5, 16),
      location: 'Virtual',
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description:
        'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['google', 'zoom'],
    },
    {
      name: 'Design Seminar Series with Professor XYZ',
      startTime: new Date(2021, 9, 5, 20),
      endTime: new Date(2021, 9, 6, 8),
      location: 'Virtual',
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description:
        'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['google', 'zoom'],
    },
    {
      name: 'Design Seminar Series with Professor XYZ',
      startTime: new Date(2021, 10, 20, 18),
      endTime: new Date(2021, 10, 20, 20),
      location: 'Virtual',
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description:
        'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['google', 'zoom'],
    },
  ]);

  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const leftClickHandler = () => setYear(year - 1);
  const rightClickHandler = () => setYear(year + 1);
  const monthClickHandler = (m: number) => setMonth(m);

  /**
   * Events that are occurring in the selected month
   */
  const filteredEvents = events.filter((event) => {
    const start = event.startTime.getFullYear() * 12 + event.startTime.getMonth();
    const end = event.endTime.getFullYear() * 12 + event.endTime.getMonth();
    const cur = year * 12 + month;
    return start <= cur && cur <= end;
  });

  const eventDisplay = (
    <EventList>
      {filteredEvents.map((event) => (
        <EventDisplay key={event.name} {...event} />
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
