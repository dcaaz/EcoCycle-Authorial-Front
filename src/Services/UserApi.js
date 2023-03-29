import api from './Api';

export async function signUp(email, password) {
  console.log("cheguei");
  const response = await api.post('/signup', { email, password });
  console.log("response", response);
  return response.data;
}