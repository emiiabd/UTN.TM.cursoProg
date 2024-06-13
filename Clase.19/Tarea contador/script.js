////// DOM OBJECTS
const botonIncrementoHTML = document.querySelector('.botonIncremento');
const botonDecrementoHTML = document.querySelector('.botonDecremento');
const botonComprarHTML = document.querySelector('.comprar-btn');
const comprarHTML = document.querySelector('.comprar');
const numeroHTML = document.querySelector('.numero');
const errorHTML = document.querySelector('.error');
const contadorHTML = document.querySelector('.contador');

////// PREDEFINED ELEMENTS
comprarHTML.style.display = 'flex';
let numero = 1;

////// FUNCTIONS
const msjError = () => {errorHTML.innerText = "Error, no se puede decrementar a menos de cero";errorHTML.style.color = "red"};

const limpiarError = ()=>{
  if(errorHTML.innerText){
    errorHTML.innerText = '';
  };
} ;

const compra = ()=>{
  contadorHTML.style.display = "flex";
  comprarHTML.style.display = "none";
  renderizarContador();
};

const renderizarContador = ()=>{
  numeroHTML.innerText = numero;
};

const incremento = ()=>{
  numero++;
  renderizarContador();
};

const decremento = ()=>{
  if(numero <= 1){
    contadorHTML.style.display = 'none';
    comprarHTML.style.display = 'flex';
  }else{
    numero--;
    renderizarContador();
  };
};

////// EVENTS
botonComprarHTML.addEventListener('click', compra);
botonIncrementoHTML.addEventListener('click', incremento);
botonDecrementoHTML.addEventListener('click', decremento);

