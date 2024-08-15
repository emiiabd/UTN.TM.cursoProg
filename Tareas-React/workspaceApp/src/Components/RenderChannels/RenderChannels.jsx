import React from 'react'
import { Link } from 'react-router-dom'
import './RenderChannels.css'
import { createNewChannel } from '../../helpers/helpers'
import { useGlobalContext } from '../../Context/GlobalContext'

const RenderChannels = ( {channels, workSpaceID, renderHiddenNav, renderNewChannel } ) => {

  const {userID} = useGlobalContext()
  const channelsName = channels.map((i) => 
    <Link to={`/workSpace/${workSpaceID}/${i.id}`} key={i.id} className="channelName">#{i.name}</Link>)

  return (
    <div className='channels'>
      <h3>Canales</h3>
      <div className="channelNames" onClick={renderHiddenNav}>
        {channelsName}
      </div>
      <div className="createChannel" onClick={renderNewChannel}>
        <p>Crear un nuevo canal</p>
      </div>
    </div>
  )
}

export default RenderChannels