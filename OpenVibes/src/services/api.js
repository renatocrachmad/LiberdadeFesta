import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export const registerUser = (data) => {
  return api.post('/register', data)
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao registrar usuário:', error);
      throw error;
    });
};


export const loginUser = (data) => {
  return api.post('/login', data)
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      throw error;
    });
};


export const getUserProfile = () => {
  return api.get('/profile')
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao buscar perfil do usuário:', error);
      throw error;
    });
};


export const getUserEvents = () => {
  return api.get('/user/events')
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao buscar eventos do usuário:', error);
      throw error;
    });
};


export const getEvents = () => {
  return api.get('/events')
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao buscar eventos:', error);
      throw error;
    });
};


export const getEventPackages = () => {
  return api.get('/packages')
    .then(response => response.data)
    .catch(error => {
      console.error('Erro ao buscar pacotes de eventos:', error);
      throw error;
    });
};

export default api;
