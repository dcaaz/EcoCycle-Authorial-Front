import api from './Api';

export async function signUp(email, password) {
  const response = await api.post('/signup', { email, password });
  return response.data;
}

export async function signIn(email, password) {
  console.log("cheguei");
  const response = await api.post('/signin', { email, password });
  console.log("response", response);
  return response.data;
}