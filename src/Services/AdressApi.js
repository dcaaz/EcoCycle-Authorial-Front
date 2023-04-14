import api from './Api';

export async function adress(body, token) {
  const response = await api.post('/adress', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function ceps(token) {
  console.log("token", token);
  const response = await api.get('/adress/cep', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}