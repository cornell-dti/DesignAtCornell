import { faculty } from '../../server';
import { Faculty } from '../../types';

export default async function getFaculty(req, res) {
  const localFaculty: Faculty[] = [];
  const facultyDocs = await faculty.get();

  for (const docRef of facultyDocs.docs) {
    const facultyDoc: Faculty = docRef.data() as Faculty;
    localFaculty.push(facultyDoc);
  }
  res.send({ success: true, data: localFaculty });
}
