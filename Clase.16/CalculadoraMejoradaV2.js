// Funciones 

const tieneMayus = (str) => str !== str.toLowerCase()

const validarEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
//                                    valida que el dato ingresado sea truthy
const validarPassword = (password) => password && password.length>6 && tieneMayus(password)

const validarNumero = (numero) => !isNaN(numero)

const validarOperacion = (operacion) => OPERADORES.hasOwnProperty(operacion)

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
//  '*': (numero1, numero2) => numero1 * numero2,
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
////////////// HISTORIAL--

if(localStorage.getItem('historial') === null){
  localStorage.setItem('historial', JSON.stringify([]))
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial'))

const guardarHistorial = (obj) =>{
  const historial= obtenerHistorial()
  historial.push(obj)
  return localStorage.setItem('historial',JSON.stringify(historial))
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

localStorage.setItem('user',JSON.stringify(login()))
//console.log(JSON.parse(localStorage.getItem('user'))) */

// CALCULADORA
const calculadora = () =>{
  const calculo = {
    accion: 'calculadora',
    operacion: null,
    numero1: null,
    numero2: null,
    resultado: null,
  }
  calculo.operacion=solicitarDato(DATOS.OPERACION)
  calculo.numero1=Number(solicitarDato(DATOS.CALCULADOR))
  calculo.numero2=Number(solicitarDato(DATOS.CALCULADOR))
  calculo.resultado= OPERADORES[calculo.operacion](calculo.numero1, calculo.numero2)

  alert(`El resultado de ${calculo.numero1} ${calculo.operacion} ${calculo.numero2} es: ${calculo.resultado}`)
  return guardarHistorial(calculo)
}

//calculadora()


//////////// Renderizar historial
const renderizarHistorial = () =>{
  //const historial = JSON.parse(localStorage.getItem('historial'))
  const historial = obtenerHistorial()
  let listaHistorial = `` //Variable lista siempre adentro, si no en el programa se van a generar dos listas a la hora de guardar una nueva lista recorriendo el programa
  for(let obj of historial){
    listaHistorial = listaHistorial + `
    Accion: ${obj.accion}
    Operacion: ${obj.operacion}
    Numeros: ${obj.numero1}, ${obj.numero2}
    Resultado: ${obj.resultado}
    `
  }
  return listaHistorial
}

alert(renderizarHistorial())
console.log(renderizarHistorial())
console.log(Date())