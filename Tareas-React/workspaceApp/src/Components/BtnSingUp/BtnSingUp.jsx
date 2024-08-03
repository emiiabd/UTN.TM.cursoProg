import React from 'react'
import { useGlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import './BtnSingUp'

const BtnSingUp = () => {

  const {handleSingUp} = useGlobalContext();

  return (
    <Link to='/register' className='btnSign' id='btnSignUP' onClick={handleSingUp}>Registrarse</Link>
  )
}

export default BtnSingUp