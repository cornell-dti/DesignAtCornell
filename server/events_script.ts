import {events} from './server'

const csv =  require('csv-parser')
const fsEventsRead = require('fs')
const eventsCSV = []

type formatEvent = {
    "title": string,
    "topic": string,
    "type": string, 
    "period": string,
    "date": string,
    "rsvpLink": string
    "description": string
}

let rosterSem = 'SP21'

function createEvents (formatEvents: formatEvent[]) {
    for(let i = 0; i < formatEvents.length; i++) {
        const newEvents = events.doc(formatEvents[i].title)
        newEvents.set({
            "title": formatEvents[i].title,
            "topic": formatEvents[i].topic,
            "date": formatEvents[i].date,
            "type": formatEvents[i].type,
            "period": formatEvents[i].period,
            "rsvpLink": formatEvents[i].rsvpLink,
            "description": formatEvents[i].description
        })
    }
}

fsEventsRead.createReadStream('./website_data_csv/courses.csv')
.pipe(csv())
.on('data', (data) => eventsCSV.push(data))
.on('end', () => {
    let formattedEvents:formatEvent[] = []
    //converting each course (CSV object) into formatCourse (JSON object)
    for(let i = 0; i < eventsCSV.length; i++) {
        let fEvent: formatEvent = {
            "title": eventsCSV[i].title,
            "topic": eventsCSV[i].topic,
            "date": eventsCSV[i].date,
            "type": eventsCSV[i].type,
            "period": eventsCSV[i].period,
            "rsvpLink": eventsCSV[i].rsvpLink,
            "description": eventsCSV[i].description
        }
        formattedEvents.push(fEvent)
    }
    createEvents(formattedEvents)
    console.log("added events to firebase")
})
