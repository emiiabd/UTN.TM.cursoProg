// Funciones 

const tieneMayus = (str) => str !== str.toLowerCase()

const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
//                                    valida que el dato ingresado sea truthy
const validarPassword = (password) => password && password.length>6 && tieneMayus(password)

const validarNumero = (numero) => !isNaN(numero)

const validarOperacion = (operacion) => OPERADORES.hasOwnProperty(operacion)

const operacion = (operador, numero1, numero2) => OPERADORES[operador](numero1, numero2)
//                                    callback (pasar una funcion)
//const solicitarDato =(email,password,fn_validacion)=>{
//funcion de solicitacion de datos mejorada con diccionario (DATOS):
const solicitarDato =(obj)=>{ 
  let dato = prompt(obj.mensaje)
  while(!obj.validacion(dato)){
    dato = prompt(obj.error)
  }
  return dato
}

// Diccionario
const OPERADORES = {
  '+': (numero1, numero2) => numero1 + numero2,
  '-': (numero1, numero2) => numero1 - numero2,
  '*': (numero1, numero2) => numero1 * numero2,
}
const DATOS = {
  
  EMAIL: {
    mensaje: 'Ingrese su email',
    error: 'Email ingresado no valido',
    validacion: validarEmail
  },
  PASSWORD: {
    mensaje: 'Ingrese su contraseña',
    error: 'Contraseña ingresada no valida, tienen que contener al menos 6 palabras y una letra mayuscula',
    validacion: validarPassword,
  },
  CALCULADOR: {
    mensaje: 'Ingrese un numero',
    error: 'El dato ingresado no es un numero, ingrese nuevamente un numero',
    validacion: validarNumero,
  },
  OPERACION: {
    mensaje: `Ingrese la operacion que quiere realizar (${Object.keys(OPERADORES)})`,
    error: `La operacion seleccionada no esta disponible, ingrese nuevamente (${Object.keys(OPERADORES)})`,
    validacion: validarOperacion,
    }
}


// LOGIN
/* const login = () =>{
  const user = {
    email: null,
    password: null,
  }                                                                       //se pasa la funcion pero no se llama o ejecuta 
  //user.email = solicitarDato('Ingrese su email','Email ingresado no valido',validarEmail)

  user.email = solicitarDato(DATOS.EMAIL) //Solicitar datos mejorada con diccionario (DATOS)
  user.password = solicitarDato(DATOS.PASSWORD)

  alert(`El usuario ${user.email} registrado correctamente`)
  return user
}

console.log(login()) */

// CALCULADORA
const calculadora = () =>{
  const calculo = {
    operacion: null,
    numero1: null,
    numero2: null,
    resultado: null,
  }
  calculo.operacion=solicitarDato(DATOS.OPERACION)
  calculo.numero1=Number(solicitarDato(DATOS.CALCULADOR))
  calculo.numero2=Number(solicitarDato(DATOS.CALCULADOR))
  calculo.resultado= operacion(calculo.operacion, calculo.numero1, calculo.numero2)

  alert(`El resultado de ${calculo.numero1} ${calculo.operacion} ${calculo.numero2} es: ${calculo.resultado}`)
  return calculo
}

console.log(calculadora())
