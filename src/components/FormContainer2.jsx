import React from 'react';
import df_completa from "../data/df_completa.json";

function generateForm(jsonData) {
  const formElements = [];
  for (const item of jsonData) {
    for (const key in item) {
      const select = (
        <div>
          <div className='text-black'>{key}</div>
          <select name={key} className='border-black text-black w-1/2 rounded-md py-2 flex'>
            <option value="" disabled className='text-black px-2'>Seleccionar</option>
            {item[key].map(value => 
            <option value={value}>{value}</option>)}
          </select>
        </div>
      );
      formElements.push(select);
    }
  }
  return formElements;
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
}

const FormContainer2 = () => {
  return (
    <div className="bg-gradient-to-r bg-[#fe0000] flex ">
      <div className="w-full h-full">
        <h3  className='px-2 py-2 text-2xl bg-[#d8be10]'>INGRESA DATOS DE LA VENTA</h3>
        <form id='1' className='px-2' onSubmit={handleSubmit}>
          {generateForm(df_completa)}
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormContainer2






