import { json } from 'body-parser';
import fetch from 'node-fetch';
import { events } from '../../server';
import { EventsResponse, Event, LocalistEvent, EventInstance } from '../../types';

function formatEvents(jsonEvents) {
  const eventsResponse: EventsResponse = jsonEvents as EventsResponse;
  console.log(eventsResponse.events);
  const eventsList: LocalistEvent[] = eventsResponse.events as LocalistEvent[];
  console.log(eventsList.length);
  const formattedEvents: Event[] = [];

  for (let i = 0; i < eventsList.length; i += 1) {
    const formattedEvent: Event = {
      title: eventsList[i].event.title,
      date: eventsList[i].event.event_instances[0].event_instance.start,
      url: eventsList[i].event.localist_url,
      description: eventsList[i].event.description_text,
      location: eventsList[i].event.location_name
    };
    formattedEvents.push(formattedEvent);
  }
  return formattedEvents;
}
//'https://events.cornell.edu/api/2/events/search?search=design'
export default function getEvents(req, res) {
  fetch('https://events.cornell.edu/api/2/events/search?search=design&distinct=true&pp=100&sort=date&days=365')
    .then((response) => response.json())
    .then((jsonResponse) => formatEvents(jsonResponse))
    .then((formattedEvents) => res.send(formattedEvents));
}
