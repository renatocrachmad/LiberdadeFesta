import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Arquivo de estilo

function Navbar({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">OpenVibes</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/agenda">Agenda</Link>
            </li>
            <li>
              <Link to="/pagamento">Pagamento</Link>
            </li>
            <li>
              <Link to="/perfil-usuario">Perfil do Usuário</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/pacote-evento">Pacote de Evento</Link>
            </li>
            <li>
              <Link to="/calendario-evento">Calendário de Evento</Link>
            </li>
            <li>
              <Link to="/perfil-servico">Perfil do Serviço</Link>
            </li>
            <li>
              <button onClick={() => alert("Sair")}>Logout</button> {/* Adicione função de logout aqui */}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
