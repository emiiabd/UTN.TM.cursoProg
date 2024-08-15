import React, { useState } from 'react'
import './navbar.css'
import { useGlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import BtnLogout from '../BtnLogout/BtnLogout';

const NavBar = ({ title, btnTipe }) => {

  const {isLoggedIn} = useGlobalContext();
  
  return (
  <>
    <header className='navBar'>
      {
        title ? <h2>{title}</h2> : <Link to='/'><h2>TripinLack</h2></Link>
      }
      <div className='btnNav'>
        {
          isLoggedIn ? <BtnLogout/> : <></>
        }
      </div>
    </header>
  </>
  )
}

export default NavBar