import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://apistatskingsfutbol.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = Cookies.get('refreshToken');
        const { data } = await axios.post('https://apistatskingsfutbol.up.railway.app/authenticate/jwt/refresh', { refresh: refreshToken });
        Cookies.set('accessToken', data.access);
        originalRequest.headers.Authorization = `Bearer ${data.access}`;
        return api(originalRequest);
      } catch (err) {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        // Aquí podrías mostrar un mensaje de error o redirigir manualmente
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);


export default api;
