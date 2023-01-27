import { random } from './random';
import { showAlert } from './showAlert';
import { showModal } from './showModal';

export const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const inputs = document.querySelectorAll("select");
  let complete = true;
  inputs.forEach((input) => {
    if (input.value === "") {
      complete = false;
    }
  });
  if (complete) {
    try {
      const resp = await fetch('https://test-api-pr1g.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const { prediction } = await resp.json();
      showModal(prediction)
      clearForm();
      
    } catch (e) {
      showAlert({
        title: 'Hubo un error al realizar la petición',
        icon: 'error'
      })
    }
  } else {
    showAlert({
      title: 'Todos los campos son necesarios',
      icon: 'error'
    })
  }
  return
};


export const clearForm = () => {
  const inputs = document.querySelectorAll("select");
  inputs.forEach((input) => {
    input.value = "";
  })
};

export const randomizeValues = () => {
  const inputs = document.querySelectorAll("select");
  inputs.forEach((input) => {
    const options = input.options;
    const randomIndex = random(options.length);
    options[randomIndex] ? input.value = options[randomIndex].value : input.value = options[0].value;
  });
};