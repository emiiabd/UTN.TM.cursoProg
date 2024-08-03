import React, { useEffect } from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'
import {NavBar, WSRender} from '../../Components'
import { useGlobalContext } from '../../Context/GlobalContext'

const Home = () => {

  const {isLoggedIn} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn) navigate('/login')}, [])

  return (
    <>
    <div className='mainViewHome'>
      <NavBar btnTipe={'logout'}/>
      <div className="homeTop"> 
        <h1 className='title'>TripinLack Works Spaces</h1>
      </div>
      <div className="homeWS">
        <WSRender/>
        <Link to={'/WorkSpace/New'} className="WS btnBig">
          <p>Create a new work space</p>
        </Link>
      </div>
      <div className="homeBottom"> 
        <span className='disclaimer'>Copyright © 2022 TripinLack. Todos los derechos reservados.</span>
      </div>
    </div>
    </>
  )
}

export default Home