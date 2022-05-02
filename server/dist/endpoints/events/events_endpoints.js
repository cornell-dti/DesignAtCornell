
const __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
exports.__esModule = true;
const node_fetch_1 = __importDefault(require('node-fetch'));

function formatEvents(jsonEvents) {
  const eventsResponse = jsonEvents;
  console.log(eventsResponse.events);
  const eventsList = eventsResponse.events;
  console.log(eventsList.length);
  const formattedEvents = [];
  for (let i = 0; i < eventsList.length; i += 1) {
    const formattedEvent = {
      title: eventsList[i].event.title,
      date: eventsList[i].event.event_instances[0].event_instance.start,
      url: eventsList[i].event.localist_url,
      description: eventsList[i].event.description_text,
      location: eventsList[i].event.location_name,
    };
    formattedEvents.push(formattedEvent);
  }
  return formattedEvents;
}
function getEvents(req, res) {
  node_fetch_1.default(
    'https://events.cornell.edu/api/2/events/search?search=design&distinct=true&pp=100&sort=date&days=365'
  )
    .then((response) => response.json())
    .then((jsonResponse) => formatEvents(jsonResponse))
    .then((formattedEvents) => res.send(formattedEvents));
}
exports.default = getEvents;
