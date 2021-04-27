import React, { useState } from 'react';
import { PageContainer, EventList, Divider } from './EventsStyles';
import Title from './Title';
import EventDisplay from './events/EventDisplay';

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
      time: '3:00 -4:00 PM EST Saturday, Jan 28, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['Add to Google Calendar', 'Zoom Link']
     },
     { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 -4:00 PM EST Saturday, Jan 28, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['Add to Google Calendar', 'Zoom Link']
     },
     { 
      name: 'Design Seminar Series with Professor XYZ', 
      time: '3:00 -4:00 PM EST Saturday, Jan 28, 2021', 
      location: 'Virtual', 
      tags: ['Annual', 'Virtual', 'Computing in the Arts'],
      description: 'As an expert in spatial design studies, Professor XYZ is visiting to give her annual lecture on how designers can better design for and the description goes on and on but this is not a real event so I’m just typing random words until this text space looks filled enough and this seems good so i’ll stop now.',
      links: ['Add to Google Calendar', 'Zoom Link']
     }
  ]);

  const eventDisplay = (
    <EventList>
      {events.map(event => (
        <EventDisplay {...event} />
      ))}
    </EventList>
  );

  return (
    <PageContainer>
      <Title />
      <Divider />
      {eventDisplay}
    </PageContainer>
  );
}

export default ExploreCourses;
