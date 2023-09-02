import { fetchBreeds } from './api.js';

import { fetchBreeds } from './api.js';

const idEl = document.querySelector('#search-box');
const ulEl = document.querySelector('.cat-list');
const divEl = document.querySelector('cat-info');

idEl.addEventListener('input', onInput);

function onInput(e) {
  e.preventDefault();
  const input = e.target.value;
  fetchBreeds(input).then(data => console.log(data));
}
