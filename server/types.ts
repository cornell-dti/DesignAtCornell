export type course_content = {
  "title": string,
  "description": string,
  "syllabus": string,
  "courseSite": string,
  "courseRoster": string,
  "credits": number,
  "major": string,
  "designAreas": string[],
  "semester": string[],
  "id": string, 
  "code": number
}
  
export type Course = {
  "id": string, 
  "code": number,
  "content": course_content
}
