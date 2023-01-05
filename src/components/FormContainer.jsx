import React from "react";
import df_completa from "../data/df_completa.json";

function generateForm(jsonData) {
  const formElements = [];
  for (const item of jsonData) {
    for (const key in item) {
      const select = (
        <div className="flex w-1/4 mx-4">
          <label htmlFor={key} className="text-lg font-semibold w-1/2">
            {key}
          </label>
          <select name={key} className="border py-2 px-4 rounded-md w-1/2">
            <option value="" disabled>
              Seleccionar
            </option>
            {item[key].map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </div>
      );
      formElements.push(select);
    }
  }
  return formElements;
};

function handleSubmit(event) {
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
    console.log(data);
    const jsonContainer = document.querySelector(".json-container");
    jsonContainer.textContent = JSON.stringify(data);
  } else {
    alert("Por favor, selecciona una opción para todos los campos");
  }
};

function randomizeValues() {
  const inputs = document.querySelectorAll("select");
  inputs.forEach((input) => {
    const options = input.options;
    const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1;
    input.value = options[randomIndex].value;
  });
};
function clearForm() {
  const inputs = document.querySelectorAll("select");
  inputs.forEach((input) => {
    input.value = "";
  })
  const jsonContainer = document.querySelector(".json-container");
  jsonContainer.textContent = '';;
};
const FormContainer = () => {
  return (
    <div className="bg-gradient-to-r bg-[#fe0000] flex">
      <div className="w-full h-full  py-8 ">
        <div className="w-full h-full  py-8 bg-[#d8be10] ">
          <h3 className="text-4xl font-semibold  mx-auto w-1/3 ">
            INGRESA DATOS DE LA VENTA
          </h3>
        </div>
        <form id="1" className="px-2" onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={randomizeValues}
            className="  py-2 px-4 rounded-md bg-gradient-to-r from-cyan-500
                         to-blue-500 mt-4 mr-4 mx-auto w-1/5 ml-40"
          >
            Llenar aleatoriamente
          </button>
          <button
            type="button"
            onClick={clearForm}
            className=" py-2 px-4 rounded-md bg-gradient-to-r from-cyan-500
                     to-blue-500 mt-4 mr-4 mx-auto w-1/5 ml-40"
          >
            Limpiar
          </button>
          <button
            type="submit"
            className=" py-2 px-4 rounded-md bg-gradient-to-r from-cyan-500
                         to-blue-500 mt-4 mx-auto w-1/5 ml-40"
          >
            Enviar
          </button>
          <div className="flex flex-wrap py-6 ml-40">{generateForm(df_completa)}</div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
