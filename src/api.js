const API_KEY =
  'live_j6aIGc6Pw8K1IcWmkJHoomXmQdhZnA9TPF1V1YmtsXFgs6EXQSzIvXo1muSnJgFc';

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data; // Возвращаем данные для последующей обработки
    })
    .catch(error => {
      console.error('Ошибка:', error);
      throw error; // Пробрасываем ошибку для обработки выше
    });
}

export { fetchBreeds };
