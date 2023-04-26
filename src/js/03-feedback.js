import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const inputs = {
  email: form.querySelector('input[name="email"]'),
  message: form.querySelector('textarea[name="message"]'),
};
const formState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
inputs.email.value = formState.email || '';
inputs.message.value = formState.message || '';

const throttledHandleInput = throttle(handleInput, 500);

function handleSubmit(event) {
  event.preventDefault();
  console.log('Form data:', {
    email: inputs.email.value,
    message: inputs.message.value,
  });
  localStorage.removeItem('feedback-form-state');
  inputs.email.value = '';
  inputs.message.value = '';
}

function handleInput() {
  const formData = {
    email: inputs.email.value,
    message: inputs.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('input', throttledHandleInput);
form.addEventListener('submit', handleSubmit);
