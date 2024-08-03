import React from 'react'
import './navbar.css'
import { useGlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import BtnLogout from '../BtnLogout/BtnLogout';
import BtnSingUp from '../BtnSingUp/BtnSingUp';
import BtnBack from '../BtnBack/BtnBack';
import BtnHidden from '../BtnHidden/BtnHidden';

const NavBar = ({title,btnTipe, hidden}) => {
  const {isLoggedIn} = useGlobalContext();

  const btnRender = () => {
    switch (btnTipe) {
      case 'logout' || isLoggedIn:
        return <BtnLogout/>
      case 'SingUp':
        return <BtnSingUp/>
      case 'back':
        return <BtnBack/>
      default:
        return <></>
    }
  }



  
  return (
    <div className='navBar'>
      {
      title ? <h2>{title}</h2> : <Link to='/'><h2>TripinLack</h2></Link>
      }
      <div className='btn'>
        {
        btnRender(btnTipe)
        }
        {
          hidden ? <BtnHidden/> : <></>
        }
      </div>
    </div>
  )
}

export default NavBar