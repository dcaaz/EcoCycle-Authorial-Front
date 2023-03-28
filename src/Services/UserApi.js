import api from './Api';

export async function signUp(email, password) {
  const response = await api.post('/users', { email, password });
  return response.data;
}