import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import api from '../../services/api'; 

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarSenha, setLembrarSenha] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, senha });
      const { token } = response.data;

      if (lembrarSenha) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      // Após login bem-sucedido, definir estado como logado
      setIsLoggedIn(true);

     
      navigate('/'); 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Falha ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="remember-me">
          <input
            type="checkbox"
            id="lembrarSenha"
            checked={lembrarSenha}
            onChange={(e) => setLembrarSenha(e.target.checked)}
          />
          <label htmlFor="lembrarSenha">Lembrar Senha</label>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
