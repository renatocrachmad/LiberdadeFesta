import React, { useState, useEffect } from 'react';
import './style.css';
import { getUserProfile, getUserEvents } from '../../services/api'; 

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileResponse = await getUserProfile(); 
        setUsuario(profileResponse.data);

        const eventsResponse = await getUserEvents(); 
        setEventos(eventsResponse.data);
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    fetchData();
  }, []);

  if (!usuario) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="perfil-usuario">
      <h2 className="usuario-nome">{usuario.nome}</h2>
      <p className="usuario-email">Email: {usuario.email}</p>
      <h3>Eventos Agendados</h3>
      <div className="eventos-lista">
        {eventos.length > 0 ? (
          eventos.map((evento, index) => (
            <div key={index} className="evento-item">
              <p><strong>{evento.nome}</strong></p>
              <p>Data: {evento.data}</p>
              <button className="botao-recontratar">Recontratar</button>
            </div>
          ))
        ) : (
          <p>Nenhum evento agendado.</p>
        )}
      </div>
    </div>
  );
};

export default PerfilUsuario;
