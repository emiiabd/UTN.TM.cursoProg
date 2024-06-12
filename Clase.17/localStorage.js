/*/////// localStorage y sessionStorage  

- Almacenamiento de valores en una tabla

localeStorage.setItem(key, value)

para leer: localeStorage.getItem(key)

para eliminar: localStorage.removeItem(key)

para eliminar todo: localStorage.clear()


let nombre=prompt("Ingrese su nombre: ")
localStorage.setItem('username', nombre)

//////////////////////////////////////
/// JSON javascript object notation

'{"nombre": "pepe"}' // String escrito en formato JSON (En objetos)

// parse: permite transformar un string con notacion de objetos a un objeto

console.log(JSON.parse('{"nombre": "pepe"}'))

// stringify: premite pasar de un objeto a un string JSON

const producto={
  nombre: 'tv samsung',
  precio: 700,
}
JSON.stringify(producto)
*/
console.log(localStorage.getItem('historial')) 
if(localStorage.getItem('historial') == null){ //pregunta si la key historial en el localStorage es nulo y si es truthy entra
  localStorage.setItem('historial', JSON.stringify([])) // genera un string vacio en la key historial del localStorage
}
const obtenerHistorial = () => JSON.parse(localStorage.getItem('historial')) // funcion para obtener la cadena de string de la key historial y 
//                                                                               la convierte en objetos (cadena de string previamente escrita en JSON(objetos en formato string))

console.log(obtenerHistorial())

const guardarHistorial = (obj) =>{
  const historial= obtenerHistorial() //Declaramos un array al obtener historial, ya que la funcion ob.hist. nos devuelve una cadena de string en objetos
  historial.push(obj) //Declaramos un nuevo elemento(posteriormente enviado como objeto) en nuestro object string historial
  return localStorage.setItem('historial',JSON.stringify(historial)) //devolvemos el historial de objentos en una nueva cadena de string transformada a JSON al localStorage 
}

const renderizarHistorial = () =>{ //declaramos funcion
  // const historial = JSON.parse(localStorage.getItem('historial'))
  const historial = obtenerHistorial() //declaramos una cadena array de objetos
  let stringHistorial = `` // una variable vacia para crear la acumulacion
  for(let obj of historial){ // por cada elemento (obj) del array historial (cadena de objetos)
    stringHistorial = stringHistorial + `
    Accion: ${obj.accion}
    Operacion: ${obj.operacion}
    Numeros: ${obj.numero1}, ${obj.numero2}
    Resultado: ${obj.resultado}
    `
  }
  return stringHistorial
}

alert(renderizarHistorial())

/* const calculadora = () =>{
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
console.log(Date()) */