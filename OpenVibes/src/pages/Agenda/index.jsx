import React, { useState, useEffect } from "react";
import "./style.css";
import { getEvents } from "../../services/api";

const Agenda = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((response) => setEvents(response.data));
  }, []);

  return (
    <div className="agenda-container">
      <h1>Agenda de Eventos</h1>
      <div className="event-calendar">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            {event.name} - {event.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
