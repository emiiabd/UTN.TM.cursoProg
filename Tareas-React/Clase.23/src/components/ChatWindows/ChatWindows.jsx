import React from 'react'
import './chatWindows.css'
const ChatWindows = ({DATA_MOOK}) => {
  const renderChat = (item,classType) =>{
    return(
      <div key={(item.id)} className={classType}>
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
    )
  }

  const mapping = DATA_MOOK.map((item) => {
    if(item.author == 'pepe'){
      return(
        renderChat(item,'leftRender')
      )
    }else{
      return(  
        renderChat(item,'rigthRender')
      )
    }
  }) 

  return (
    <>
    <div className='chatWindow'>
      {mapping}
    </div>
    </>
  )
}

export default ChatWindows