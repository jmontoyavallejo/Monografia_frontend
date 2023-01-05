import React from 'react';
import df_items from "../data/df_items.json";
import df_store from "../data/df_store.json";
import df_user from "../data/df_user.json";


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
  

    const FormContainer = () => {
      return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex ">
          <div className="w-full h-full">
            <h3  className='px-2 py-2 text-2xl bg-gray-200'>INGRESA DATOS DEL ITEM</h3>
            <form id='1' className='px-2'>
              {generateForm( df_items)}
            </form>
          </div>
          <div className="w-full h-full">
            <h3 className='px-2 py-2 text-2xl bg-gray-200'>INGRESA DATOS DE LA TIENDA</h3>
            <form id='2'className='px-2'>
              {generateForm( df_store)}
            </form>
          </div>
          <div className="w-full h-full">
            <h3 className='px-2 py-2 text-2xl bg-gray-200'>INGRESA DATOS DEL USUARIO</h3>
            <form id='3' className='px-2'>
              {generateForm(df_user)}
            </form>
          </div>
        </div>
      );
    };
  
export default FormContainer;

