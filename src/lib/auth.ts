import Cookies from 'js-cookie';
import api from './fetcher';

const AuthActions = {
  login: async (email: string, password: string) => {
    const { data } = await api.post('/authenticate/jwt/create', { username: email, password });
    Cookies.set('accessToken', data.access);
    Cookies.set('refreshToken', data.refresh);
  },
  logout: async () => {
    const refreshToken = Cookies.get('refreshToken');
    await api.post('/authenticate/logout/', { refresh: refreshToken });
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  },
  getToken: (type: 'access' | 'refresh') => {
    return Cookies.get(`${type}Token`);
  },
  storeToken: (token: string, type: 'access' | 'refresh') => {
    Cookies.set(`${type}Token`, token);
  },
  removeTokens: () => {
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  },
};

export default AuthActions;
