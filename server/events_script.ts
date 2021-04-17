import {events} from './server'

const csv =  require('csv-parser')
const fs_events_read = require('fs')
const events_csv = []

type formatEvent = {
    "title": string,
    "topic": string,
    "type": string, 
    "period": string,
    "date": string,
    "rsvp_link": string
    "description": string
}

let roster_sem = 'SP21'

function createEvents (format_events: formatEvent[]) {
    for(let i = 0; i < format_events.length; i++) {
        const newEvents = events.doc(format_events[i].title)
        newEvents.set({
            "title": format_events[i].title,
            "topic": format_events[i].topic,
            "date": format_events[i].date,
            "type": format_events[i].type,
            "period": format_events[i].period,
            "rsvp_link": format_events[i].rsvp_link,
            "description": format_events[i].description
        })
    }
}

fs_events_read.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => events_csv.push(data))
.on('end', () => {
    let formatted_events:formatEvent[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < events_csv.length; i++) {
        let f_event: formatEvent = {
            "title": events_csv[i].title,
            "topic": events_csv[i].topic,
            "date": events_csv[i].date,
            "type": events_csv[i].type,
            "period": events_csv[i].period,
            "rsvp_link": events_csv[i].rsvp_link,
            "description": events_csv[i].description
        }
        formatted_events.push(f_event)
    }
    createEvents(formatted_events)
    console.log("added events to firebase")
})
