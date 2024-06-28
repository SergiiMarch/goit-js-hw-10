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
      console.log('✅ Fulfilled promise in:', message);
    })
    .catch(message => {
      console.log('❌ Rejected promise in:', message);
    });
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'Fulfilled') {
        resolve(`${delay}ms`);
      } else {
        reject(`${delay}ms`);
      }
    }, delay);
  });
}

// createPromise(1000, 'Fulfilled')
//   .then(message => console.log('✅ Success:', message))
//   .catch(message => console.log('❌ Error:', message));

// createPromise(1000, 'Rejected')
//   .then(message => console.log('✅ Success:', message))
//   .catch(message => console.log('❌ Error:', message));
