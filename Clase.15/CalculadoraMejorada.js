const tieneMayus = (str) => str !== str.toLowerCase()

const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)

const validarPassword = (password) => password && password.length>6 && tieneMayus(password)

const validarNumero = (numero) => !isNaN(numero)

const validarOperacion = (operacion) => operacion === '+' || operacion === '-'

//                                    callback (pasar una funcion)
//const solicitarDato =(email,password,fn_validacion)=>{
const solicitarDato =(obj)=>{ //funcion mejorada con diccionario (DATOS)
  let dato = prompt(obj.mensaje)
  while(!obj.validacion(dato)){
    dato = prompt(obj.error)
  }
  return dato
}


const DATOS = { // Diccionario
  EMAIL: {
    mensaje: 'Ingrese su email',
    error: 'Email ingresado no valido',
    validacion: validarEmail
  },
  PASSWORD: {
    mensaje: 'Ingrese su contraseña',
    error: 'Contraseña ingresada no valida, tienen que contener al menos 6 palabras y una letra mayuscula',
    validacion: validarPassword
  },
  CALCULADOR: {
    mensaje: 'Ingrese un numero',
    error: 'El dato ingresado no es un numero, ingrese nuevamente un numero',
    validacion: validarNumero,
  },
  OPERACION: {
    mensaje: 'Ingrese la operacion que quiere realizar (+ o -)',
    error: 'La operacion seleccionada no esta disponible, ingrese nuevamente (+ o -)',
    validacion: validarOperacion,
    }
}

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

const calculadora = () =>{
  const calculo = {
    operacion: null,
    numero1: null,
    numero2: null,
    resultado: null,
  }
  calculo.operacion=solicitarDato(DATOS.OPERACION)
  calculo.numero1=solicitarDato(DATOS.CALCULADOR)
  calculo.numero2=solicitarDato(DATOS.CALCULADOR)

  if (calculo.operacion === '+'){
    calculo.resultado= Number(calculo.numero1) + Number(calculo.numero2)
  } else {
    calculo.resultado= Number(calculo.numero1) - Number(calculo.numero2)
  }

  alert(`El resulttado de ${calculo.numero1} ${calculo.operacion} ${calculo.numero2} es ${calculo.resultado}`)
  return calculo
}

console.log(calculadora())