import React, { useState } from "react";
import "./ChatInput.css";
import { TbSend } from "react-icons/tb";

const ChatInput = ({handleOnSubmit}) => {

  const [message, setMessage] = useState({content: ''});
  const [sendState, setSendState] = useState(false);


  const handleOnClick = () => {
    setSendState(!sendState)
  }

  const handleOnChange = (e) =>{
    setMessage((prevState) => ({...prevState, ['content']: e.target.value}))
  }

  return (
    <div className="chatInput">
      <form action="" className="inputForm" onSubmit={(e) => {
          handleOnSubmit(e, message), 
          setMessage({content: ''}), 
          setSendState(false)
        }} >
        <textarea placeholder="Escribe un mensaje" type="text" name="content" className="textInput" onChange={handleOnChange} onFocusCapture={handleOnClick} value={message.content}/>
        {
          sendState &&
          <button type="submit" className="btnSendMsg">
            <TbSend/>
          </button>
        }
      </form>
    </div>
  );
};

export default ChatInput;
