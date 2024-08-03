import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import {DATA} from '../Data/data'
import {userData} from '../Data/userData'
import { ERRORS } from "../Data/errors";
import { getUserID, getUsuariosEnLocal } from "../helpers/helpers";


const GlobalContext = createContext();


export const GlobalContextProvider = ({children}) =>{
  // Initial States
  const initialState = {
    username: '',
    password: ''
  }
  const initialStateError = {
    username: [],
    password: [],
    globalError: [],
    emptyCell: [],
  }

  

  const isLogged = () => localStorage.getItem('user')

  
  // States
  const [loginForm, setLoginForm] = useState(initialState);
  const [errors, setErrors] = useState(initialStateError);
  const [isLoggedIn, setIsLoggedIn] = useState(isLogged() ? true : false);
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate();
  
  useEffect(() => {
  if(!isLoggedIn) navigate('/login')}, [])

  const handleLogOut = () => {
    localStorage.removeItem('user')
    setIsLoggedIn(false)
  }

  const handleChangeValue = (e) => setLoginForm({...loginForm,[e.target.name]: e.target.value});
  const findErrors = (from, IDtoValidate) => errors[from].find(objError => objError.id === IDtoValidate)

  
  const validateError = (from, toValidate) => {
  if(findErrors(from, toValidate.id)){
    if(toValidate.validate(loginForm[from])){
      const newError = errors[from].filter(objError => objError.id !== toValidate.id)
      setErrors({...errors, [from]: newError})
    }
  }
  else {
    if(!toValidate.validate(loginForm[from])){
      setErrors({...errors, [from]: [...errors[from], toValidate]})
      console.log(errors)
    }
  }
}

  const USERS = getUsuariosEnLocal();
  const userID= getUserID();


  return(
    <GlobalContext.Provider value={
      {
      ERRORS: ERRORS,
      DATA: DATA,
      USERS: USERS,
      isLoggedIn,
      setIsLoggedIn,
      loginForm,
      setLoginForm,
      errors,
      setErrors,
      handleLogOut,
      userID,
      handleChangeValue,
      validateError,
      findErrors,
      disabled,

      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);