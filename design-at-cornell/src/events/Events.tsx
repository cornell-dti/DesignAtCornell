import React, { useState } from 'react';
import { PageContainer, EventList } from './EventsStyles';
import Title from './Title';
import Filter from './dashboard/Filter';
import EventDisplay from './dashboard/EventDisplay';

export type Event = {
  name: string;
  time: string;
  location: string;
  tags: string[];
  description: string;
  links: string[];
};

const ExploreCourses = () => {

  const [events] = useState<Event[]>([
    { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 - 4:00 PM EST Saturday, May 1, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['google', 'zoom']
     },
     { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 - 4:00 PM EST Saturday, May 1, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['zoom', 'rsvp', 'facebook']
     },
     { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 - 4:00 PM EST Saturday, May 1, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['facebook', 'eventLink']
     },
     { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 - 4:00 PM EST Saturday, Feb 28, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['facebook', 'eventLink']
     },
     { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 - 4:00 PM EST Saturday, Feb 28, 2019', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['facebook', 'eventLink']
     }
  ]);

  const date = new Date();
  
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.toLocaleString('default', { month: 'long' }));

  const leftClickHandler = () => setYear(year - 1);
  const rightClickHandler = () => setYear(year + 1);
  const monthClickHandler = (m: string) => setMonth(m);

  const filteredEvents = events.filter((event) => event.time.includes(month.slice(0, 3)) && event.time.includes(year.toString()))

  const eventDisplay = (
    <EventList>
      {filteredEvents.map(event => (
        <EventDisplay {...event} />
      ))}
    </EventList>
  );

  return (
    <PageContainer>
      <Title />
      <Filter 
        month={month}
        year={year}
        leftClickHandler={leftClickHandler}
        rightClickHandler={rightClickHandler}
        monthClickHandler={monthClickHandler}
      />
      {eventDisplay}
    </PageContainer>
  );
}

export default ExploreCourses;
