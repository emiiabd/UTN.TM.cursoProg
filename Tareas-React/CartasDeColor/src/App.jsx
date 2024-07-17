import React, { useState } from 'react';
import ColorCard from './components/ColorCards/ColorCard';
import cardsListInitial from './data/dataCards';
import FormCards from './components/FormCards/FormCards';


function App() {
  const [cardsList, setCardList] = useState(cardsListInitial);

  const handleSubmit = (e, formValues) =>{
    e.preventDefault()
    console.log('submit', formValues)
    const colors = [];
    for(let i = 1; i <= 4; i++){
      colors.push(formValues[`color-${i}`])
    }
    setCardList([...cardsList, {colors, likes: 0, date: formValues.time, id: cardsList.length}])
  }
  console.log(cardsList)
  return (
  <>
    <FormCards handleSubmit={handleSubmit} />
    <div className='cards-container'>
      <ColorCard cardsList={[...cardsList]}/>
    </div>
  </>
  );
};

export default App;
