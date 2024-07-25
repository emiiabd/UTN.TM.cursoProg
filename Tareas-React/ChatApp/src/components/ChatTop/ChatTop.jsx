import React from 'react'
import './chatTop.css'
import { Link, useNavigate } from 'react-router-dom'

const ChatTop = ({title, thumbnail}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className="chatTop">
      <div className='userContact'> 
        <div className="imageContacts">
          <img src={thumbnail} alt=""/>
        </div>
        <p>{title}</p>
      </div>
      <button onClick={handleClick}><i className="bi bi-x"></i></button>
    </div>
  )
}

export default ChatTop