import React from 'react'
import './chatTop.css'

const ChatTop = ({title}) => {
  return (
    <div className="chatTop">
        <p>{title}</p>
        <button><i className="bi bi-x"></i></button>
      </div>
  )
}

export default ChatTop