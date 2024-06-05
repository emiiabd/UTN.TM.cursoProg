//
/* const login = () =>{                    ///////// Deberia separar las logicas de las validaciones, hacer despues de la clase.
  const resultado={
    email:null,
    password:null,
  }
  let user = prompt('Ingrese su email')
  while(!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(user))){
    alert('El email ingresado es incorrecto')
    user = prompt('Ingrese nuevamente su email')
  }
  resultado.email = user
  let password = prompt('Ingrese su contraseña que contenga al menos una mayuscula')
  while(password === password.toLowerCase() || password == '' || password == null || password.length<=6){ ////// MAL
    alert('La contraseña ingresada es incorrecta')
    password = prompt('Ingrese nuevamente su contraseña')
  }
  resultado.password = password
  alert(`El usuario ${resultado.email} fue registrado con exito`)
  return resultado
}

console.log(login()) */


// Resuelto por el profe
// validaciones tipo email y password, es mejor que reciba algo y devuelva un booleano
const tieneMayus = (str) => str !== str.toLowerCase()

const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

const validarPassword = (password) =>{
  return password && password.length>6 && tieneMayus(password)
}

const login = () =>{
  const user = {
    email: null,
    password: null,
  }
  let email = prompt('Ingrese su email')
  while(!validarEmail(email)){
    email = prompt('Ingrese nuevamente su email')
  }
  user.email = email

  let password = prompt('Ingrese su contraseña')
  while(!validarPassword(password)){
    password = prompt('Ingrese nuevamente su contraseña')
  }
  user.password = password

  alert(`El usuario ${user.email} registrado correctamente`)
  return user
}

console.log(login())

