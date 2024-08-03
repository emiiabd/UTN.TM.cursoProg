import React from 'react'
import { NavBar, RegisterScreen } from '../../Components';
import { useGlobalContext } from '../../Context/GlobalContext';
import { registerNewUser } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

  const { loginForm } = useGlobalContext()

  const navigate = useNavigate()

  const handleRegisterSubmit = (e) => {
    e.preventDefault()
    registerNewUser(loginForm.username, loginForm.password);
    navigate('/login')
  }

  
  return (
    <>
    <div className='mainViewRegister'>
      <NavBar/>
      <RegisterScreen handleRegisterSubmit={handleRegisterSubmit}/>
    </div> 
    </>
  )
}

export default Register