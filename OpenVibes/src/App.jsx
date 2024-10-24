import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Cadastro';
import Login from './pages/Login';
import Agenda from './pages/Agenda';
import Payment from './pages/Pagamento';
import PerfilUsuario from './pages/PerfilUsuario';
import Chat from './components/Chat';
import PacoteEvento from './components/PacoteEvento';
import CalendarioEvento from './components/CalendarioEvento';
import PerfilServico from './components/PerfilServico';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {isLoggedIn && (
            <>
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/pagamento" element={<Payment />} />
              <Route path="/perfil-usuario" element={<PerfilUsuario />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/pacote-evento" element={<PacoteEvento />} />
              <Route path="/calendario-evento" element={<CalendarioEvento />} />
              <Route path="/perfil-servico" element={<PerfilServico />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
