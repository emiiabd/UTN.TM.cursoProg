////// DOM ELEMENTS
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
const renderizarContador = ()=> numeroHTML.innerText = numero;

const handleCompra = ()=>{
  contadorHTML.style.display = "flex";
  comprarHTML.style.display = "none";
  renderizarContador();
};

const handleIncremento = ()=>{
  numero++;
  renderizarContador();
};

const handleDecremento = ()=>{
  if(numero <= 1){
    contadorHTML.style.display = 'none';
    comprarHTML.style.display = 'flex';
  }else{
    numero--;
    renderizarContador();
  };
};

////// EVENTS
botonComprarHTML.addEventListener('click', handleCompra);
botonIncrementoHTML.addEventListener('click', handleIncremento);
botonDecrementoHTML.addEventListener('click', handleDecremento);

