import React from 'react';
import ChatWindows from '../ChatWindows/ChatWindows';
import ChatTop from '../ChatTop/ChatTop';
import './Chatbot.css';
import ChatBottom from '../ChatBottom/ChatBottom';

const Chatbot = ({title, DATA_MOOK, handleSubmit}) => {
  

  return (
    <div className='chatbot'>
      <ChatTop title={title}/>
      <ChatWindows DATA_MOOK={DATA_MOOK}/>
      <ChatBottom handleSubmit={handleSubmit}/>
    </div>
  );
};

export default Chatbot;