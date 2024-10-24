import React from 'react';
import './style.css';

const Payment = () => {
  return (
    <div className="payment-container">
      <h1>Pagamento</h1>
      <form>
        <input type="text" placeholder="Número do Cartão" />
        <input type="text" placeholder="Nome no Cartão" />
        <input type="date" placeholder="Validade" />
        <input type="text" placeholder="CVV" />
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default Payment;
