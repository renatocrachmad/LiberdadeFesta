import React, { useState } from 'react';
import './style.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Função para enviar mensagens
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Não envia mensagens vazias

    const newMessage = {
      text: input,
      sender: 'Cliente', // Altere para 'Organizador' conforme necessário
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat com Organizador</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === 'Cliente' ? 'from-cliente' : 'from-organizador'}`}>
            <span className="message-text">{msg.text}</span>
            <span className="message-time">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="input-field"
        />
        <button type="submit" className="send-button">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
