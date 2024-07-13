import React from 'react';
import './NavBar.css';

const NavBar = ({isLogged,isAdmin,lang}) => {
    
  return (
    <nav className='nav'>
      <h2>Logo</h2>
      <div className='nav-info'>
      <p><a href="#">{lang.title}</a></p>
      {!isLogged && <button>{lang.login}</button>}
      {isAdmin && <button type='button'>{lang.admin}</button>}
    </div>
    </nav>
  )
}

export default NavBar

///////////////////////////
const propiedades = {
  color: 'verde',
  descripcion: 'lorem',
}

const array = [1,2]

// DESESTRUCTURACION DE OBJETOS
const {color, descripcion} = propiedades /* se indica por nombre de la propiedad */
//const color = propiedades.color
//const descripcion = propiedades.descripcion

// DESESTRUCTURACION DE ARRAYS
const {valor1, valor2} = array /* El array se indica por posicion del array, no el nombre de la propiedad */
//const valor1 = array[0]
//const valor2 = array[1]

/* const miFuncion = (obj) =>{
  const {nombre} = obj;
  console.log('Hola me llamo ' + nombre)
}

miFuncion({nombre: 'pepe'}) */

// DESESTRUCTURACION PRO
//                  se desestructura directamente en los parametros de la funcion
const miFuncion = ({nombre}) =>{
  console.log('Hola me llamo ' + nombre)
}

miFuncion({nombre: 'pepe'})