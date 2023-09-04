import { fetchBreeds } from './api.js';
import { API_KEY } from './api.js';

const selectEl = document.querySelector('.breed-select');
const divEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

selectEl.addEventListener('change', setOutput);

function setOutput(e) {
  e.preventDefault();
  const selectedBreedId = e.target.value;
  console.log(selectedBreedId);

  // Показуємо завантажувач перед запитом
  loaderEl.classList.remove('hide');
  loaderEl.classList.add('show');
  divEl.classList.add('hide');

  // Виконуємо HTTP-запит для завантаження інформації про кота
  fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${selectedBreedId}`,
    { headers: { 'x-api-key': API_KEY } }
  )
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      displayCatInfo(data[0]);
    })
    .catch(error => {
      console.error('Помилка при загрузці інформації про кота:', error);
      divEl.innerHTML =
        'Помилка: не вдалося завантажити інформацію про кота. Спробуйте оновити сторінку.';
    })
    .finally(() => {
      // Скриваємо завантажувач після завершення запиту
      loaderEl.classList.remove('show');
      loaderEl.classList.add('hide');
      divEl.classList.remove('hide');
    });
}

function displayCatInfo(catData) {
  divEl.innerHTML = `
  <h2>${catData.breeds[0].name}</h2>
  <p><strong>Описание:</strong> ${catData.breeds[0].description}</p>
  <p><strong>Темперамент:</strong> ${catData.breeds[0].temperament}</p>
  <img src="${catData.url}" alt="Кот ${catData.breeds[0].name}" width="320px">
`;
}

function loadBreeds() {
  fetchBreeds()
    .then(data => {
      // Очистіть поточний вміст <select>
      selectEl.innerHTML = '<option value="">Оберіть породу</option>';

      // Додайте опції для кожної породи кота
      data.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        selectEl.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Помилка при завантаженні порід:', error);
    });
}

// Викликайте функцію завантаження порід при натисканні на <select>
selectEl.addEventListener('click', loadBreeds);
