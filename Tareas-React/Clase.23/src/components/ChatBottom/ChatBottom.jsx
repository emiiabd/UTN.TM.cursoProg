import React from 'react'
import './chatBottom.css'

const ChatBottom = () => {
  return (
    <div className='chatBottom'>
        <input type="text" placeholder="Escribe aqui..."/>
        <button><i className="bi bi-send"></i></button>
    </div>
  )
}

export default ChatBottom