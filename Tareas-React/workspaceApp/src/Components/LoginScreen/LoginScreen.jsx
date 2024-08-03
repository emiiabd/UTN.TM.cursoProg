import React from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { Link } from "react-router-dom";
import './LoginScreen.css'


const LoginScreen = ({handleLoginSubmit,}) => {
  const {ERRORS, handleChangeValue, validateError, errors} = useGlobalContext()

  return (
    <>
      <div className="loginForm">
        <div className="title">
          <h3>User Portal</h3>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div className="formScreen">
            <div className="inputs">
              <label htmlFor="username">Ingrese su nombre de usuario</label>
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
              <label htmlFor="password">Ingrese su contrasela</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChangeValue}
                placeholder="Password"
              />
            </div>
              {
                errors.globalError.length > 0 &&
                errors['globalError'].map((obj, index) => <span key={index}>{obj.text}</span>)
              }
          </div>
          <div className="buttons">
            <Link className='btn' to={'/register'}> Registrarse </Link>
            <input className='btn' type="submit" value="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
