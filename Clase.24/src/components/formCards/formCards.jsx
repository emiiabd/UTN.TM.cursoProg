import React, { useState } from 'react'

const FormCards = () => {
  const formColorCardSchema ={
    colors: 4,
    time: 'timestamp'
  }
  
  const colorsInputs = [];
  const initialState = {};

  const [formValues, setFormValues] = useState(initialState);

  for (let i = 1; i <= formColorCardSchema.colors; i++) {
    initialState["color" + i] = "";
    colorsInputs.push(
      <div key={i}>
        <label htmlFor={"color" + i}>Color {i} </label>
        <input type="text" name={"color" + i} id={"Color" + i} onChange={handleChangeOnValue}/>
      </div>
    );
  }
  console.log(initialState)
  
  const handleChangeOnValue = (e) => {
    const valueToChange = e.target.name;
    const value = e.target.value;

    setFormValues({...formValues, [valueToChange]: value})
  }

  console.log(formValues)

  return (
    <>
    <form action="">
      <h2>Crea tu propia carta</h2>
      {colorsInputs}
      <label htmlFor="time">Fecha </label>
      <input type={formColorCardSchema.time} name="time" id="time" onChange={handleChangeOnValue}/>
    </form>
    </>
  )
}

export default FormCards