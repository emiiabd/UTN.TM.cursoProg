import React, { useState } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";


const RegisterScreen = ({
  handleRegisterSubmit,
}) => {
  

  const {ERRORS, handleChangeValue, validateError, errors, disabled} = useGlobalContext()
  

console.log(errors)

  return (
    <>
      <div className="loginForm">
        <div className="title">
          <h3>User Portal</h3>
        </div>
        <form onSubmit={handleRegisterSubmit}>
          <div className="formScreen">
            <div className="inputs">
              <label htmlFor="username">Ingrese un usuario</label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={handleChangeValue}
                onBlur={() =>
                  validateError("username", ERRORS.usernameErrorLength)
                }
                placeholder="Username"
              />
            </div>
              {errors.username.length > 0 &&
                errors.username.map((obj, index) => (
                  <span key={index}>{obj.text}</span>
                ))}
            <div className="inputs">
              <label htmlFor="password">Ingrese su contraseña</label>
              <input
                id="psw"
                type="password"
                name="password"
                onChange={handleChangeValue}
                placeholder="Password"
                onBlur={() =>
                  validateError("emptyCell", ERRORS.emptyCell)
                }
              />
            </div>
            <div className="inputs">
              <label htmlFor="password2">
                Ingrese nuevamente la contraseña
              </label>
              <input
                id="psw2"
                type="password"
                name="password2"
                onChange={handleChangeValue}
                placeholder="Password"
                onBlur={() => 
                  {
                    validateError("emptyCell", ERRORS.emptyCell)
                    validateError("password", ERRORS.passwordError,)
                  }
                }
              />
            </div>
            {
              errors.password.length > 0 &&
              errors.password.map((i, index) => (
                  <span key={index}>
                    {i.text}
                  </span>  
              ))
            }
            {
              errors.emptyCell.length > 0 &&
              errors.emptyCell.map((i, index) => (
                  <span key={index}>
                    {i.text}
                  </span>  
              ))
            }

          </div>
          <div className="buttons">
            <Link className='btn' to={'/login'}> Logearse </Link>
            <input className='btn' type="submit" value="Registrarse" disabled={disabled} />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterScreen;
