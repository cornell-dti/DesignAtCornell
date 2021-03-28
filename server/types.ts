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
  
export type major_content = {
    "academic_level": string,
    "department_page": string,
    "design_areas": string[],
    "reasons": Reason[],
    "school": string
  
}

export type Major = {
    "title": string,
    "content": major_content
}
  
export type Reason = {
    "first_name": string,
    "grad_year": number,
    "response": string
}
  



  