import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './WorkSpace.css'
import { getWorkSpaceInfo } from '../../helpers/helpers'
import {BtnHidden, BtnBack, RenderChannels, RenderNewChannel, ChatMessages, ChatInput} from '../../Components'
import { useGlobalContext } from '../../Context/GlobalContext'
import { v4 as uuid } from 'uuid';

const WorkSpace = () => {
  const parametros =useParams()
  const {userID, setErrors} = useGlobalContext()
  const {workSpaceID, channelID} = parametros
  const [hiddenNav, setHiddenNav] = useState(false);
  const [newChannelState, setNewChannelState] = useState(false);

  //Reset Errors
  useEffect(() => {
    setErrors({})
  }, [])
  
  const {
    workSpace,
    workSpaceThumbnail,
    channels
  } = getWorkSpaceInfo(userID, workSpaceID)

  const messageTemplate = {
    author: 'yo',
    content: '',
    thumbnail: '',
    date: '',
    hour: '',
    id: ''
  }
  
  const channel = channels.find((i) => i.id === channelID);

  
  const handleOnSubmit = (e, message) => {
    let date = new Date();
    e.preventDefault()
    const newMessage = {
      author: 'yo',
      content: message.content,
      thumbnail: 'user image',
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 
      hour: `${date.getHours()}:${date.getMinutes()}`,
      id: `${uuid()}`
    }
    channel.messages.push(newMessage)
    console.log(channel.messages)
  }

  const renderHiddenNav = () => {
    setHiddenNav(!hiddenNav)
    if(newChannelState) setNewChannelState(!newChannelState)
  }

  const renderNewChannelState = () => {
    setNewChannelState(!newChannelState)
    setHiddenNav(!hiddenNav)
  }

  return (
    <div className='mainView workSpace' >
      <div className="navWS">
        <h3>{workSpace}</h3>
        <div className="btnWS">
          <BtnBack/>
          <BtnHidden renderHiddenNav={renderHiddenNav} />
        </div>
        <div className='hiddenNav' >
          {
            hiddenNav &&
            <RenderChannels channels={channels} workSpaceID={workSpaceID} renderHiddenNav={renderHiddenNav} renderNewChannel={renderNewChannelState}/>
          }
          {
            newChannelState &&  
            <RenderNewChannel renderNewChannelState={renderNewChannelState} userId={userID} workSpaceID={workSpaceID}/>
          }
        </div>
      </div>
      <div className="chatBox">
        <ChatMessages channel={channel}/>
        <ChatInput handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export default WorkSpace