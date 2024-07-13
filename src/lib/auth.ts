import Cookies from 'js-cookie';
import api from './api';

export const AuthActions = {
  login: async (email: string, password: string) => {
    const { data } = await api.post('/authenticate/jwt/create', { username: email, password });
    Cookies.set('token', data.access, { sameSite: 'Lax' });
    Cookies.set('userEmail', email, { sameSite: 'Lax' });
  },
  logout: async () => {
    const refreshToken = Cookies.get('refreshToken');
    if (refreshToken) {
      await api.post('/authenticate/logout/', { refresh: refreshToken });
    }
    Cookies.remove('token', { sameSite: 'Lax' });
    Cookies.remove('refreshToken', { sameSite: 'Lax' });
    Cookies.remove('userEmail', { sameSite: 'Lax' });
  }
};
