import fetch from 'node-fetch';
import { EventsResponse, Event, LocalistEvent } from '../../types';

function formatEvents(jsonEvents) {
  const eventsResponse: EventsResponse = jsonEvents as EventsResponse;
  const eventsList: LocalistEvent[] = eventsResponse.events as LocalistEvent[];
  console.log(eventsList.length);
  const formattedEvents: Event[] = [];

  for (let i = 0; i < eventsList.length; i += 1) {
    const formattedEvent: Event = {
      title: eventsList[i].event.title,
      lastDate: eventsList[i].event.last_date,
      url: eventsList[i].event.localist_url,
      description: eventsList[i].event.description_text,
      location: eventsList[i].event.location_name
    };
    formattedEvents.push(formattedEvent);
  }
  return formattedEvents;
}

export default function getEvents(req, res) {
  fetch('https://events.cornell.edu/api/2/events/search?search=design&pp=20')
    .then((response) => response.json())
    .then((jsonResponse) => formatEvents(jsonResponse))
    .then((formattedEvents) => res.send(formattedEvents));
}
