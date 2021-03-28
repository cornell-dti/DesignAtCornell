export type course_content = {
    "title": string,
    "description": string,
    "syllabus": string,
    "site": string,
    "roster": string,
    "credits": number,
    "major": string,
    "design_areas": string[],
    "semester": string[],
  }
  
export type Course = {
    "id": string, 
    "code": number,
    "content": course_content
  }