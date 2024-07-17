import React from 'react';
import { ChatTop, ChatWindows, ChatBottom } from '../index';
import './Chatbot.css';

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