import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  formEl: document.querySelector('.form'),
  fieldsetEl: document.querySelector('fieldset'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const delay = Number(refs.formEl.elements.delay.value);
  const state = refs.formEl.elements.state.value;

  createPromise(delay, state)
    .then(message => {
      iziToast.show({
        progressBarColor: 'rgba(0, 255, 0)',
        progressBar: true,
        title: 'show',
        message: '✅ Fulfilled promise in:',
      });
      // console.log('✅ Fulfilled promise in:', message);
    })
    .catch(message => {
      iziToast.error({
        progressBarColor: 'rgba(255, 0, 0)',
        progressBar: true,
        title: 'error',
        message: '❌ Rejected promise in:',
      });
    });
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`${delay}ms`);
      } else {
        reject(`${delay}ms`);
      }
    }, delay);
  });
}
