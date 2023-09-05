const API_KEY =
  'live_j6aIGc6Pw8K1IcWmkJHoomXmQdhZnA9TPF1V1YmtsXFgs6EXQSzIvXo1muSnJgFc';

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;

  // Додаємо ключ API до HTTP-запиту в заголовок
  const headers = {
    'x-api-key': API_KEY,
  };

  return fetch(url, { headers })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      return data; // Повертаємо масив порід для подальшої обробки
    })
    .catch(error => {
      console.error('Помилка при завантаженні порід:', error);
      throw error;
    });
}
export { API_KEY };
export { fetchBreeds };
