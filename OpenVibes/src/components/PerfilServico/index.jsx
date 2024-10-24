import React from 'react';
import './style.css';

const PerfilServico = ({ servico }) => {
  return (
    <div className="perfil-servico">
      <h2 className="servico-nome">{servico.nome}</h2>
      <img src={servico.imagem} alt={servico.nome} className="servico-imagem" />
      <p className="servico-descricao">{servico.descricao}</p>
      <p className="servico-preco">Preço: R$ {servico.preco.toFixed(2)}</p>
      
      <div className="servico-avaliacoes">
        <h3>Avaliações:</h3>
        {servico.avaliacoes.length > 0 ? (
          servico.avaliacoes.map((avaliacao, index) => (
            <div key={index} className="avaliacao">
              <p><strong>{avaliacao.usuario}</strong>: {avaliacao.comentario}</p>
              <p className="avaliacao-nota">Nota: {avaliacao.nota}/5</p>
            </div>
          ))
        ) : (
          <p>Sem avaliações ainda.</p>
        )}
      </div>
      
      <button className="servico-botao">Contratar Serviço</button>
    </div>
  );
};

export default PerfilServico;
