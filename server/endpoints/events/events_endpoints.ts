import { EventsResponse, Event, LocalistEvent } from '../../types';
const fetch = require('node-fetch');

function formatEvents(jsonEvents) {
  const eventsResponse: EventsResponse = jsonEvents as EventsResponse;
  const eventsList: LocalistEvent[] = eventsResponse.events as LocalistEvent[];
  console.log(eventsList.length);
  const formattedEvents: Event[] = [];

  for (let i = 0; i < eventsList.length; i++) {
    const formattedEvent: Event = {
      title: eventsList[i].event.title,
      lastDate: eventsList[i].event.last_date,
      url: eventsList[i].event.localist_url,
      description: eventsList[i].event.description_text,
    };
    formattedEvents.push(formattedEvent);
  }
  return formattedEvents;
}

export function getEvents(req, res) {
  fetch('https://events.cornell.edu/api/2/events/search?search=design&pp=20')
    .then((response) => response.json())
    .then((jsonResponse) => formatEvents(jsonResponse))
    .then((formattedEvents) => res.send(formattedEvents));
}
