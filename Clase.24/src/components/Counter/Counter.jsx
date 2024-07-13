import React, { useState } from 'react';

const Counter = ({limitUp}) => {
  const [contador, setContador] = useState(0);
  const handleClickAddButton = () => {
    setContador(contador + 1);
  };
  const handleClickLessButton = () => {
    setContador(contador - 1);
  };

  return (
    <>
    {contador > 0 &&<button onClick={handleClickLessButton}>-</button>}
    <span> {contador} </span>
    {contador < limitUp ? (<button onClick={handleClickAddButton}>+</button>) : <span> No se puede incrementar mas</span>}
    </>
  )
}

export default Counter;