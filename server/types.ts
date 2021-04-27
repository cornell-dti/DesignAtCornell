export type CourseContent = {
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
    "content": CourseContent
}
  
export type MajorContent = {
    academicLevel: string,
    departmentPage: string,
    designAreas: string[],
    reasons: Reason[],
    school: string
}

export type Major = {
    title: string,
    content: MajorContent
}
  
export type Reason = {
    "first_name": string,
    "grad_year": number,
    "response": string
}

export type ClubContent = {
    "design_areas": string[],
    "org_type": string, 
    "size": string,
    "website": string,
    "description": string
    "credits": number
}

export type Club = {
    "title": string,
    "content": ClubContent
}
