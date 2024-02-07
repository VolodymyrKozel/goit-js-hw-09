const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const inputsData = { email: '', message: '' };
addEventListener('load', () => {
  restoreData();
});

const handleInput = e => {
  inputsData.email = e.currentTarget.elements.email.value.trim();
  inputsData.message = e.currentTarget.elements.message.value.trim();
  saveToLS(storageKey, inputsData);
};
const handleSubmit = e => {
  e.preventDefault();
  validateForm();
  console.log(inputsData)
  form.reset();
  localStorage.removeItem(storageKey);
};

//helper functions
function validateForm() {
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    return alert('Please fill in all the fields!');
  }
}
function restoreData() {
  const inputsDataFromStore = loadFromLS(storageKey) || {
    email: '',
    message: '',
  };
  form.elements.email.value = inputsDataFromStore.email;
  form.elements.message.value = inputsDataFromStore.message;
}
function loadFromLS(key = 'empty') {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch {
    return data;
  }
}

function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);
