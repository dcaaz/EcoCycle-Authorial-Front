import api from './Api';

export async function adress(body, token) {
  console.log("cheguei aqui 2");
  const response = await api.post('/adress', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("cheguei aqui 3");
  return response.data;
}

export async function ceps(token) {
  console.log("cheguei em ceps");
  const response = await api.get('/adress/cep', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("response", response)
  return response.data;
}