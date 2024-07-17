import React from 'react';
import './chatWindows.css';

const ChatWindows = ({DATA_MOOK}) => {

  const mapping = DATA_MOOK.map((item) => {
    const render = item.author == 'pepe' ? 'leftRender' : 'rigthRender';
    return (
      <div key={(item.id)} className={render}>
        <p>{item.content} </p>
        <div className="state">
          <span>
            {item.fecha}
          </span>
          <span>
            {item.estado}
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
    <div className='chatWindow'>
      {mapping}
    </div>
    </>
  );
};

export default ChatWindows;