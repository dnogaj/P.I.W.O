import React, { useState, useEffect, useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { AuthContext } from "./AuthContext";
import "../App.css";
import "./Calendar.css";

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

const categories = ["Narciarstwo", "Żeglarstwo", "Rolki", "Inne"];

function Calendarr() {
  const { isLoggedIn } = useContext(AuthContext);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    color: "",
    category: "",
  });
  const [allEvents, setAllEvents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchEvents();
  }, []);

  async function fetchEvents() {
    try {
      const response = await fetch("http://127.0.0.1:5000/events");
      const data = await response.json();

      const eventsWithCorrectDates = data.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));

      setAllEvents(eventsWithCorrectDates);
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  }

  async function handleAddEvent() {
    if (!newEvent.title || !newEvent.start || !newEvent.end || !newEvent.category) {
      alert("Wypełnij wszystkie pola aby wysłać");
      return;
    }

    const response = await fetch("http://127.0.0.1:5000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });

    if (response.ok) {
      alert("Wydarzenie zostało pomyślnie dodane. Czeka na akceptację przed administratora");
      setNewEvent({
        title: "",
        start: "",
        end: "",
        color: "",
        category: "",
      });
      fetchEvents();
    } else {
      console.error("Problem z wysłaniem na serwer");
    }
  }

  const filteredEvents = filter === "All" ? allEvents : allEvents.filter((event) => event.category === filter);
  return (
    <div className="calendarr-container">
      <div className="calendar-title">Kalendarz wydarzeń</div>
      {isLoggedIn && (
        <>
          <h2>Dodaj nowe wydarzenie:</h2>
          <div className="add-event">
            <input
              type="text"
              placeholder="Add Title"
              className="event-input"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <div className="date-picker-container">
              <DatePicker
                placeholderText="Data początkowa"
                className="date-picker"
                selected={newEvent.start}
                onChange={(start) => setNewEvent({ ...newEvent, start })}
              />
              <DatePicker
                placeholderText="Data końcowa"
                className="date-picker"
                selected={newEvent.end}
                onChange={(end) => setNewEvent({ ...newEvent, end })}
              />
            </div>
            <select
              value={newEvent.category}
              onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
              className="event-input"
            >
              <option value="">Wybierz kategorię...</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            
            <button className="add-event-button" onClick={handleAddEvent}>
              Dodaj wydarzenie
            </button>
          </div>
        </>
      )}
      <h2 >Filtruj wydarzenia: </h2>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="event-filter">
        <option value="All">Wszystkie</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <Calendar
        localizer={localizer}
        events={filteredEvents}
        startAccessor="start"
        endAccessor="end"
        className="calendar-container"
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
