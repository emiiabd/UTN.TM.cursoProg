import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './contacts.css'

const Contacts = ({DATA_MOOK}) => {
  const navigate = useNavigate();

  const handleOnClick = (id) => {
    navigate('/chat/'+id);
  }

  const contactList = DATA_MOOK.map((contact)=>{
    
    const lastMessage =contact.mensajes[contact.mensajes.length - 1].content;

    const lastHour = contact.mensajes[contact.mensajes.length - 1].hour;

    return (
    <div className='contacts' key={contact.id} onClick={() => handleOnClick(contact.id)}>
          <div className='imageContacts'>
            <img src={contact.thumbnail} alt=""/>
          </div>
        <div className="infoContact">
          <div className='nameContacts'>
            <p className='name'>{contact.nombre}</p>
            <p className='lastMessage'>{lastMessage}</p>
          </div>
          <div className="lastConection">
            <p>{lastHour}</p>
          </div>
        </div>
    </div>
    )
  })

  return (
    <div className="contactsView">{contactList}</div>
  )
}

export default Contacts