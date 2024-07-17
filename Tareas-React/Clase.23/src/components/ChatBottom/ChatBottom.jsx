import React, { useState } from 'react';
import './chatBottom.css';

const ChatBottom = ({handleSubmit}) => {

  const [msj, setMsj] = useState('');
  const handleChangeOnValue = (e) => {
    setMsj(e.target.value);
  };

  return (
    <form className='chatBottom' onSubmit={(e) => (handleSubmit(e, msj), `${document.getElementById('textBoxInput').value = ''}`)}>
        <input id='textBoxInput' type="text" placeholder="Escribe aqui..." required onChange={handleChangeOnValue}/>
        <button type='submit'><i className="bi bi-send"></i></button>
    </form>
  );
};

export default ChatBottom;