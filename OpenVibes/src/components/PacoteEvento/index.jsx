import React from 'react';
import './style.css';

const PacoteEvento = ({ pacote }) => {
  return (
    <div className="pacote-evento">
      <h2 className="pacote-titulo">{pacote.nome}</h2>
      <p className="pacote-descricao">{pacote.descricao}</p>
      <p className="pacote-preco">Preço: R$ {pacote.preco.toFixed(2)}</p>
      <button className="pacote-botao">Contratar</button>
    </div>
  );
};

export default PacoteEvento;
