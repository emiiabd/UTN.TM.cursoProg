import React from 'react'
import './chatTop.css'
import { Link } from 'react-router-dom'

const ChatTop = ({title}) => {
  return (
    <div className="chatTop">
        <p>{title}</p>
        <Link to='/'><button><i className="bi bi-x"></i></button></Link>
    </div>
  )
}

export default ChatTop