import React from 'react';
import Card,{CardColorRender} from '../Card/Card';


const ColorCard = ({cardsList}) => {
  const cardsDisplay = cardsList.map((item)=>{

    const colorsArrayID = item.colors.map((colorID)=>{
      return(<CardColorRender colorID={colorID}/>)
    });

    return(<Card colors={colorsArrayID} likes={item.likes} date={item.date}/>);
  });
  
  return (cardsDisplay);
};

export default ColorCard;