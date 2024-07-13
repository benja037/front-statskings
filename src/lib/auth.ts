import Cookies from 'js-cookie';
import api from './fetcher';

export const AuthActions = {
  login: async (email: string, password: string) => {
    const { data } = await api.post('/authenticate/jwt/create', { username: email, password });
    Cookies.set('token', data.access);
    Cookies.set('userEmail', email);
  },
  logout: async () => {
    const refreshToken = Cookies.get('refreshToken');
    if (refreshToken) {
      await api.post('/authenticate/logout/', { refresh: refreshToken });
    }
    Cookies.remove('token');
    Cookies.remove('refreshToken');
    Cookies.remove('userEmail');
  }
};
