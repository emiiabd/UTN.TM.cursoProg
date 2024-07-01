import React from 'react';

const Card = (props) => {
  return (
    <div className='cards'>
        <div className='colors'>
          {props.colors}
        </div>
        <div className='card-info'>
          <button className='btn-like'>
            <i className='bi bi-heart'></i> {props.likes}
          </button>
          <span className='update'>
            {props.date}
          </span>
        </div>
      </div>
  );
};

export const CardColorRender = (props) =>{
  return(
    <div className='color' style={{backgroundColor: props.colorID}}>
      <span>{props.colorID}</span>
    </div>
  );
};

export default Card;