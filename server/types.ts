export type courseContent = {
    "title": string,
    "description": string,
    "syllabus": string,
    "courseSite": string,
    "courseRoster": string,
    "credits": number,
    "major": string,
    "designAreas": string[],
    "semester": string[],
}
  
export type Course = {
    "id": string, 
    "code": number,
    "content": courseContent
}
  
export type majorContent = {
    "academicLevel": string,
    "departmentPage": string,
    "designAreas": string[],
    "reasons": Reason[],
    "school": string
    "type": string
  
}

export type Major = {
    "title": string,
    "content": majorContent
}
  
export type Reason = {
    "firstName": string,
    "gradYear": number,
    "response": string
}

export type clubContent = {
    "designAreas": string[],
    "orgType": string, 
    "size": string,
    "website": string,
    "description": string,
    "credits": number,
    "contact": string
}

export type Club = {
    "title": string,
    "content": clubContent
}

export type eventContent = {
    "date": string,
    "period": string,
    "type": string,
    "topic": string,
    "description": string,
    "rsvpLink": string
}

export type Event = {
    "title": string,
    "content": eventContent
}
