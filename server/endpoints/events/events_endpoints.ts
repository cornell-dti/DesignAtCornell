import { events } from '../../server';
import { eventContent, Event } from '../../types';

export async function getEvents(req, res) {
  const { title } = req.query;
  const localEvents: Event[] = [];
  if (title === undefined) {
    const eventDocs = await events.get();
    for (const docRef of eventDocs.docs) {
      const eventC: eventContent = docRef.data() as eventContent;
      const event = {
        title: docRef.id,
        content: eventC,
      };
      localEvents.push(event);
    }
    res.send({ success: true, data: localEvents });
  } else {
    const eventRef = await events.doc(title.toString()).get();
    const event = eventRef.data();
    event.title = title;
    res.send({ success: true, data: event });
  }
}

export async function createEvents(req, res) {
  const event: Event = req.body;
  if (
    event.title === undefined ||
    event.content.description === undefined ||
    event.content.date === undefined ||
    event.content.topic === undefined ||
    event.content.rsvpLink === undefined ||
    event.content.period === undefined ||
    event.content.type === undefined
  ) {
    res.send({ success: false, message: 'One or more fields is missing.' });
  } else {
    const newEvent = events.doc(event.title);
    newEvent.set(event.content);
    res.send({ success: true, data: event });
  }
}

export async function deleteEvents(req, res) {
  const { title } = req.body;
  if (title === undefined) {
    res.send({ success: false, message: 'Event title is missing.' });
  } else {
    events.doc(title).delete();
    res.send({ success: true });
  }
}

export async function updateEvents(req, res) {
  const { title } = req.body;
  const { field } = req.body;
  const { content } = req.body;

  if (title === undefined || field === undefined || content === undefined) {
    res.send({ success: false, message: 'One or more fields is missing.' });
  } else {
    events.doc(title).update({ field: content });
    res.send({ success: true });
  }
}
