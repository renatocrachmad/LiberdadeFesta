import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Promoções de Festas e Eventos</h1>
      <section className="promo-section">
        <h2>Pacotes Promocionais</h2>
        <div className="promo-list"></div>
      </section>
      <section className="events-section">
        <h2>Eventos em Destaque</h2>
        <div className="events-list"></div>
      </section>
    </div>
  );
};

export default Home;
