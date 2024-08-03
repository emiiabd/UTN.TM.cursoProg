import React from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../../Components'
import './WorkSpace.css'
import { getWorkSpaceInfo } from '../../helpers/helpers'

const WorkSpace = () => {
  const parametros =useParams()

  const {userID, workSpaceID} = parametros

  

  return (
    <>
      <div className='mainViewWS'>
      <NavBar btnTipe={'logout'} hidden={true}/>
      <p>{userID}</p>
      <button onClick={() => getWorkSpaceInfo(userID,workSpaceID)}>hola</button>
    </div>
    </>
  )
}

export default WorkSpace