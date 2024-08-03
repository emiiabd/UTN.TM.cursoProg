import React, { useEffect } from 'react'
import './login.css'
import { useGlobalContext } from '../../Context/GlobalContext';
import { LoginScreen, NavBar, RegisterScreen } from '../../Components';
import { setLocalUser } from '../../helpers/helpers';
import { useNavigate } from 'react-router-dom';

/* 
  REVISAR VALIDACIONES DE REGISTER,

*/
const Login = () => {
  const navigate = useNavigate();

// Context
  const {ERRORS, USERS, loginForm, errors, setErrors, setIsLoggedIn, findErrors} = useGlobalContext()

//Functions
  useEffect(() => {
    if(findErrors('globalError', ERRORS.userNotFound.id)){
      return setErrors({...errors, ['globalError']: []})
    } 
  } , [])

  const handleLoginSubmit = (e) => {
  e.preventDefault();
  for(const user of USERS){
    if(user.password === loginForm.password && user.username === loginForm.username){
      setLocalUser(user);
      setIsLoggedIn(true);
      return navigate('/');
    };
  }

  if(!findErrors('globalError', ERRORS.userNotFound.id)){
    return setErrors({...errors, ['globalError']: [...errors['globalError'], ERRORS.userNotFound]})
  } 
  return 
  }

  return (
    <>
    <div className='mainViewLogin'>
      <NavBar/>
      <LoginScreen handleLoginSubmit={handleLoginSubmit}/>
    </div>
    </>
  )
}

export default Login