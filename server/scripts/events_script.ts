import csv from 'csv-parser';
import fsEventsRead from 'fs';
import { events } from '../server';
import { Event } from '../types';

const eventsCSV = [];

function createEvents(formatEvents: Event[]) {
  for (let i = 0; i < formatEvents.length; i += 1) {
    const newEvents = events.doc(formatEvents[i].title);
    newEvents.set({
      title: formatEvents[i].title,
      topic: formatEvents[i].content.topic,
      date: formatEvents[i].content.date,
      type: formatEvents[i].content.type,
      period: formatEvents[i].content.period,
      rsvpLink: formatEvents[i].content.rsvpLink,
      description: formatEvents[i].content.description,
    });
  }
}

fsEventsRead
  .createReadStream('./website_data_csv/courses.csv')
  .pipe(csv())
  .on('data', (data) => eventsCSV.push(data))
  .on('end', () => {
    const formattedEvents: Event[] = [];
    // converting each course (CSV object) into formatCourse (JSON object)
    for (let i = 0; i < eventsCSV.length; i += 1) {
      const fEvent: Event = {
        title: eventsCSV[i].title,
        content: {
          topic: eventsCSV[i].topic,
          date: eventsCSV[i].date,
          type: eventsCSV[i].type,
          period: eventsCSV[i].period,
          rsvpLink: eventsCSV[i].rsvpLink,
          description: eventsCSV[i].description,
        },
      };
      formattedEvents.push(fEvent);
    }
    createEvents(formattedEvents);
    console.log('added events to firebase');
  });
