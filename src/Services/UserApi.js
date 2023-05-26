import api from './Api';

export async function signUp(email, password) {
  console.log("cheguei aqui");
  const response = await api.post('/signup', { email, password });
  console.log("response", response);
  return response.data;
}

export async function signIn(email, password) {
  const response = await api.post('/signin', { email, password });
  return response.data;
}