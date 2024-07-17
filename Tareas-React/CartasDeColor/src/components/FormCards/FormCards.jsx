import React, { useState } from 'react'

const FormCards = ({handleSubmit}) => {

  const formSchema = {
    colors: 4,
    time: 'timestamp',
    likes: 0,
  };

  const colorsImputs= [];
  const initialState = {time:''};
  for(let i = 1; i <= formSchema.colors; i++) {
    initialState[`color-${i}`]= '';
  }
  const [formValues, setFormValues] = useState(initialState);

  const handleChangeOnValue = (e) =>{
    const valueToChange = e.target.name;
    const value = e.target.value;
    setFormValues({...formValues, [valueToChange]: value})
    }
    
  for(let i = 1; i <= formSchema.colors; i++) {
    initialState[`color-${i}`]= '#';
    colorsImputs.push(
      <div key={i} style={{display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'row'}}>
        <label htmlFor={`color-${i}`}>Color {i}</label>
        <input type="color" name={`color-${i}`} id={`color-${i}`} onChange={handleChangeOnValue}/>
        <div style={{backgroundColor: `${formValues[`color-${i}`]}`, width: '50px', height: '50px'} }></div>
      </div>
    )
  }

  

  return (
  <>
    <form onSubmit={(e) => handleSubmit(e , {...formValues})}>
      <h2>Crea tu propia carta</h2>
      {colorsImputs}
      <div>
        <label htmlFor="time">Fecha de carga: </label>
        <input type={formSchema.time} name="time" id="time" onChange={handleChangeOnValue} required/>
      </div>
      <button type='submit'>Submit</button>
    </form>
  </>
  )
}

export default FormCards