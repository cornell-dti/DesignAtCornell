export type courseContent = {
  title: string;
  description: string;
  syllabus: string;
  site: string;
  roster: string;
  credits: number;
  major: string;
  designAreas: string[];
  semester: string[];
};

export type Course = {
  id: string;
  code: number;
  content: courseContent;
};
