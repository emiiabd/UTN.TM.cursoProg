import React from 'react'
import NavBar from './components/NavBar/NavBar';

function App() {
  let condicion = true;

  const userData = {
    isLogged: true,
    isAdmin: true,
    lang: 'es',
  };

  const data = {
    EN:{
      title: 'Home',
      login: 'Login',
      admin: 'Create product'
    },
    ES:{
      title: 'Inicio',
      login: 'Iniciar Sesion',
      admin: 'Crear Producto'
    },
  };

  const dataSelected = data[userData.lang.toUpperCase()];

  return (
    <>
    <NavBar isLogged={false} isAdmin={true} lang={dataSelected}/>
    {
      condicion
      ? <h2>Se cumplio</h2>
      : <h3>No se cumple</h3>
    }
    </>
  )
}

export default App

const DATA_MOOK = [
  {
    author: 'pepe',
    content: 'Hola?',
    fecha: 'ayer 13:25',
    estado: 'visto',
    id: 1,
  },
  {
    author: 'yo',
    content: 'Hola pedazo',
    fecha: 'ayer 13:26',
    estado: 'visto',
    id: 2,
  },
  {
    author: 'pepe',
    content: 'Que pasa pedazo?',
    fecha: 'ayer 13:30',
    estado: 'visto',
    id: 3,
  },
  {
    author: 'yo',
    content: 'Chau',
    fecha: 'ayer 13:31',
    estado: 'visto',
    id: 4,
  },
];