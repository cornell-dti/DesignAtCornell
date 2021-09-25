import { clubs } from "../../server";
import { Club, clubContent } from "../../types";

export async function getClubs(req, res) {
    const clubTitle = req.query.title;
  const localClubs: Club[] = [];

  if (clubTitle === undefined) {
    const clubDocs = await clubs.get();
    for (const docRef of clubDocs.docs) {
      const clubC: clubContent = docRef.data() as clubContent;
      const club: Club = {
        content: clubC,
        title: docRef.id,
      };
      localClubs.push(club);
    }
  }
  res.send({ success: true, data: localClubs });
}

export async function createClubs(req, res) {
    const club: Club = req.body;

  if (
    club.title === undefined ||
    club.content.description === undefined ||
    club.content.website === undefined ||
    club.content.designAreas === undefined ||
    club.content.size === undefined ||
    club.content.credits === undefined ||
    club.content.orgType === undefined ||
    club.content.contact === undefined
  ) {
    res.send({ success: false, message: 'one or more fields is missing' });
  } else {
    const newClub = clubs.doc(club.title);
    newClub.set(club.content);
    res.send({ success: true, data: club });
  }

}

export async function deleteClubs(req, res) {
    const { title } = req.body;

  if (title === undefined) {
    res.send({ success: false, message: 'One or more fields is missing' });
  } else {
    clubs.doc(title).delete();
    res.send({ success: true });
  }

}

export async function updateClubs(req, res) {
    const { field } = req.body;
  const { title } = req.body;
  const { content } = req.body;

  if (content === undefined || field === undefined || title === undefined) {
    res.send('One or more fields is missing.');
  } else {
    clubs.doc(title).update({ field: content });
    res.send({ success: true });
  }

}