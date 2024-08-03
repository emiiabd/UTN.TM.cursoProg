import React from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'
import { getUserById } from '../../helpers/helpers'
import { Link } from 'react-router-dom';
import './WSRender.css'

const WSRender = ({handleClick}) => {
  const {userID} = useGlobalContext();
  
  if (!userID) return
  const userMemory = getUserById(userID).userMemory
  
  const workSpaces = userMemory.map((i)=>{;
    return (
    <Link to={`/workSpace/${userID}/${i.workSpaceID}`} className="WS" key={i.workSpaceID}>
      <div className="imageWS">
        <img src={i.workSpaceThumbnail} alt="img" />
      </div>
      <p>{i.workSpace}</p>
    </Link> 
  )
  })
  return (
    workSpaces
  )
}

export default WSRender