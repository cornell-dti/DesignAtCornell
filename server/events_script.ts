import {events} from './server'

const csv =  require('csv-parser')
const fs_events_read = require('fs')
const eventsCSV = []

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

function createEvents (formatEvents: formatEvent[]) {
    for(let i = 0; i < formatEvents.length; i++) {
        const newEvents = events.doc(formatEvents[i].title)
        newEvents.set({
            "title": formatEvents[i].title,
            "topic": formatEvents[i].topic,
            "date": formatEvents[i].date,
            "type": formatEvents[i].type,
            "period": formatEvents[i].period,
            "rsvp_link": formatEvents[i].rsvp_link,
            "description": formatEvents[i].description
        })
    }
}

fs_events_read.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => eventsCSV.push(data))
.on('end', () => {
    let formatted_events:formatEvent[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < eventsCSV.length; i++) {
        let f_event: formatEvent = {
            "title": eventsCSV[i].title,
            "topic": eventsCSV[i].topic,
            "date": eventsCSV[i].date,
            "type": eventsCSV[i].type,
            "period": eventsCSV[i].period,
            "rsvp_link": eventsCSV[i].rsvp_link,
            "description": eventsCSV[i].description
        }
        formatted_events.push(f_event)
    }
    createEvents(formatted_events)
    console.log("added events to firebase")
})
