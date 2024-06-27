const refs = {
  formEl: document.querySelector('.form'),
  fieldsetEl: document.querySelector('fieldset'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const delay = refs.formEl.elements.delay.value;
  const state = refs.formEl.elements.state.value;

  greatePromise(delay, state)
    .then(message => {
      console.log('succeos');
    })
    .catch(message => {
      console.log('error');
    });
}
