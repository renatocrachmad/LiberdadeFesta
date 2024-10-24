import React, { useState } from "react";
import "./style.css";

const CalendarioEvento = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const daysInMonth = getDaysInMonth(
    selectedDate.getFullYear(),
    selectedDate.getMonth()
  );

  return (
    <div className="calendario-container">
      <h1>Calendário de Eventos</h1>
      <div className="calendario">
        {/* Nomes dos dias da semana */}
        <div className="dia-semana">Dom</div>
        <div className="dia-semana">Seg</div>
        <div className="dia-semana">Ter</div>
        <div className="dia-semana">Qua</div>
        <div className="dia-semana">Qui</div>
        <div className="dia-semana">Sex</div>
        <div className="dia-semana">Sáb</div>

        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`dia ${
              day.toDateString() === new Date().toDateString() ? "dia-hoje" : ""
            }`}
            onClick={() => setSelectedDate(day)}
          >
            {day.getDate()}

            <div className="evento">Evento 1</div>
            <div className="evento">Evento 2</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarioEvento;
