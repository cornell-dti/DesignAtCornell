"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var node_fetch_1 = __importDefault(require("node-fetch"));
function formatEvents(jsonEvents) {
    var eventsResponse = jsonEvents;
    console.log(eventsResponse.events);
    var eventsList = eventsResponse.events;
    console.log(eventsList.length);
    var formattedEvents = [];
    for (var i = 0; i < eventsList.length; i += 1) {
        var formattedEvent = {
            title: eventsList[i].event.title,
            date: eventsList[i].event.event_instances[0].event_instance.start,
            url: eventsList[i].event.localist_url,
            description: eventsList[i].event.description_text,
            location: eventsList[i].event.location_name
        };
        formattedEvents.push(formattedEvent);
    }
    return formattedEvents;
}
function getEvents(req, res) {
    node_fetch_1["default"]('https://events.cornell.edu/api/2/events/search?search=design&distinct=true&pp=100&sort=date&days=365')
        .then(function (response) { return response.json(); })
        .then(function (jsonResponse) { return formatEvents(jsonResponse); })
        .then(function (formattedEvents) { return res.send(formattedEvents); });
}
exports["default"] = getEvents;
