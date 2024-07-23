import React, { useState } from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';

export const ProductNew = () => {
  const formSchema = {
    nombre: '',
    descripcion: '',
    precio: 0,
    stock: 0,
    codigo: '',
    categoria: '',
    thumbnail: '',
  };

  const {products,handleSubmit} = useGlobalContext();

  const initialState = {...formSchema, id: products.length + 10};
  const formInputs = [];
  
  const [formValues, setFormValues] = useState(initialState);

  const handleChangeOnValue = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  for(const prop in formSchema){
    formInputs.push( 
    <div key={prop}> 
      <label htmlFor={prop}> {prop.toUpperCase()}: </label>
      <input type="text" id={prop} name={prop} required onChange={handleChangeOnValue}/> 
    </div> );
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, formValues)}>
        <h1>Ingresar un producto</h1>
        {formInputs}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
