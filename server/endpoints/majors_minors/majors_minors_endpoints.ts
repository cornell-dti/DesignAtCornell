import { majors } from "../../server";
import { Major, majorContent } from "../../types";

export async function getMajors(req, res) {
    const majorTitle = req.query.title;
    const localMajors: Major[] = [];
    
    if (majorTitle === undefined) {
        const majorDocs = await majors.get();

        for (const docRef of majorDocs.docs) {
        const majorC: majorContent = docRef.data() as majorContent;
        const major: Major = {
            content: majorC,
            title: docRef.id,
        };
        localMajors.push(major);
        }

        res.send({ success: true, data: localMajors });
    } else {
        const majorDocRef = await majors.doc(majorTitle.toString()).get();
        const majorC: majorContent = majorDocRef.data() as majorContent;
        if (majorC === undefined) {
        res.send({ success: false, message: 'Major not found.' });
        } else {
        const major: Major = {
            content: majorC,
            title: majorDocRef.id,
        };
        localMajors.push(major);
        res.send({ success: true, data: localMajors });
        }
  }
}

export async function createMajors(req, res) {
    const major: Major = req.body;

    if (
        major.title === undefined ||
        major.content.academicLevel === undefined ||
        major.content.departmentPage === undefined ||
        major.content.designAreas === undefined ||
        major.content.reasons === undefined ||
        major.content.school === undefined ||
        major.content.type === undefined
    ) {
        res.send({ success: false, message: 'one or more fields is missing' });
    } else {
        const newMajor = majors.doc(major.title);
        newMajor.set(major.content);
        res.send({ success: true, data: major });
    }
}

export async function deleteMajors(req, res) {
    const { title } = req.body;

  if (title === undefined) {
    res.send({ success: false, message: 'One or more fields is missing' });
  } else {
    majors.doc(title).delete();
    res.send({ success: true });
  }
}

export async function updateMajors(req, res) {
    const { field } = req.body;
  const { title } = req.body;
  const { content } = req.body;

  if (content === undefined || field === undefined || title === undefined) {
    res.send('One or more fields is missing.');
  } else {
    majors.doc(title).update({ field: content });
    res.send({ success: true });
  }
}