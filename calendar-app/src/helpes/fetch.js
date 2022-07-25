const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;

  if (method !== 'GET') {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  return fetch(url);
};

const fetchConToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (method !== 'GET') {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify(data),
    });
  }

  return fetch(url, {
    method,
    headers: {
      'x-token': token,
    },
  });
};

export { fetchSinToken, fetchConToken };
