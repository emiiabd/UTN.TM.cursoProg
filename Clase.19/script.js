const alertar = () => alert('Hola mundo')

document.getElementById("btn-2").onclick = alertar

document.querySelector('.btn-3').addEventListener('click', alertar)



/* const limpiarError = ()=>{
  if(errorHTML.innerText){
    errorHTML.innerText = ''
  }
} 

const renderizarContador = ()=>{
  numeroHTML.innerText = numero
}

const incremento = () => {
  limpiarError()
  numero++
  renderizarContador()
}

const decremento = ()=>{
  if(numero === 0){
    msjError()
  }else{
    numero--
    renderizarContador()
  }
}
renderizarContador()
botonHTML.addEventListener('click', incremento)
botonDHTML.addEventListener('click', decremento) */

/* console.log(contadorHTML.hasAttribute("hidden"))
contadorHTML.removeAttribute("hidden")
console.log(contadorHTML.hasAttribute("hidden"))
botonComprarHTML.setAttribute("hidden", true)
console.log(botonComprarHTML.hasAttribute("hidden")) */


const botonIncrementoHTML = document.querySelector('.botonIncremento')
const botonDecrementoHTML = document.querySelector('.botonDecremento')
const botonComprarHTML = document.querySelector('.comprar')
const numeroHTML = document.querySelector('.numero')
const errorHTML = document.querySelector('.error')
const contadorHTML = document.querySelector('.contador')


console.log(contadorHTML.hasAttribute("hidden"))
contadorHTML.removeAttribute("hidden")
console.log(contadorHTML.hasAttribute("hidden"))
botonComprarHTML.setAttribute("hidden", true)
console.log(botonComprarHTML.hasAttribute("hidden"))



let numero = 1


const msjError = () => {errorHTML.innerText = "Error, no se puede decrementar a menos de cero";errorHTML.style.color = "red"}

const limpiarError = ()=>{
  if(errorHTML.innerText){
    errorHTML.innerText = ''
  }
} 

const renderizarContador = ()=>{
  numeroHTML.innerText = numero
}

const incremento = () => {
  limpiarError()
  numero++
  renderizarContador()
}

const decremento = ()=>{
  if(numero === 0){
    msjError()
  }else{
    numero--
    renderizarContador()
  }
}


botonIncrementoHTML.addEventListener('click', incremento)
botonDecrementoHTML.addEventListener('click', decremento)

