import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "../App.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const categories = ['Ski', 'Sail', 'Rollerblade', 'Other'];

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
        color: "red",
        category: "Work",
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
        color: "blue",
        category: "Personal",
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
        color: "green",
        category: "Other",
    },
];

function Calendarr() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", color: "", category: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [filter, setFilter] = useState('All');

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        setNewEvent({ title: "", start: "", end: "", color: "", category: "" });
    }

    const filteredEvents = filter === 'All' ? allEvents : allEvents.filter(event => event.category === filter);

    return (
        <div className="Calendar">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                    placeholderText="Start Date"
                    style={{ marginRight: "10px" }}
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                />
                <select
                    value={newEvent.category}
                    onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                >
                    <option value="">Select category...</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <input
                    type="color"
                    value={newEvent.color}
                    onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
                />
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <h2>Filter Events</h2>
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="All">All</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <Calendar
                localizer={localizer}
                events={filteredEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                eventPropGetter={(event) => ({
                    style: {
                        backgroundColor: event.color,
                    },
                })}
            />
        </div>
    );
}

export default Calendarr;