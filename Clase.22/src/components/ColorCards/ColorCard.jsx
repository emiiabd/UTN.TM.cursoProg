import React from 'react';
import Card,{CardColorRender} from './Card';


const ColorCard = (cards) => {
  const cardsDisplay = cards.map((item)=>{

    const colorsArrayID = item.colors.map((colorID)=>{
      return(<CardColorRender colorID={colorID}/>)
    });

    return(<Card colors={colorsArrayID} likes={item.likes} date={item.date} />);
  });
  
  return (cardsDisplay);
};

export default ColorCard;