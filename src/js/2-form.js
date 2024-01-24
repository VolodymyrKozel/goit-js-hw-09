const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const inputsData = {
  email: '',
  message: '',
};
addEventListener('load', () => {
  if (localStorage.getItem(storageKey) !== null) {
    const inputsData = JSON.parse(localStorage.getItem(storageKey));
    form.elements.email.value = inputsData.email;
    form.elements.message.value = inputsData.message;
  }
});

const handleInput = e => {
  inputsData.email = e.currentTarget.elements.email.value.trim();
  inputsData.message = e.currentTarget.elements.message.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(inputsData));
};
const handleSubmit = e => {
  e.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all the fields!');
  }
  form.reset();
  console.log(inputsData);
  localStorage.removeItem(storageKey);
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
