import React, { useState } from 'react'

const FormCards = () => {
  const formSchema ={
    colors: 4,
    time: 'timestamp'
  }
  
  const colorsInputs = [];
  const initialState = {};
  const [formValues, setFormValues] = useState(initialState);

  const handleChangeOnValue = (e) => {
    const valueToChange = e.target.name;
    const value = e.target.value;

    setFormValues({...formValues, [valueToChange]: value})
  }

  //Esto genera los inputs del formulario de forma dinamica en base a la variable form.Schema.colors
  for (let i = 1; i <= formSchema.colors; i++) {
    initialState["color" + i] = '#';
    colorsInputs.push(
      <div key={i}>
        <label htmlFor={"color" + i}>Color {i} </label>       {/* evento para que cambie en tiempo real */}
        <input type="text" name={"color" + i} id={"Color" + i} onChange={handleChangeOnValue} style={{backgroundColor: formValues["color" + i]}}/>
      </div>
    );
  }

  console.log(formValues)

  return (
    <>
    <form action="">
      <h2>Crea tu propia carta</h2>
      {colorsInputs}
      <div>
        <label htmlFor="time">Fecha: </label>
        <input type={formSchema.time} name='time' id='time' onChange={handleChangeOnValue}/>
      </div>
    </form>
    </>
  )
}

export default FormCards