import React from 'react'
import Chatbot from './components/Chatbot/Chatbot';

const DATA_MOOK = [
  {
    author: 'pepe',
    content: 'Hola?',
    fecha: 'ayer a 15:34',
    estado: 'visto',
    id: 1
  },
  {
    author: 'yo',
    content: 'Sos real OMG',
    fecha: 'ayer a 15:35',
    estado: 'visto',
    id: 2
  },
  {
    author: 'pepe',
    content: 'Obviamente, acaso lo dudaste?',
    fecha: 'ayer a 15:36',
    estado: 'visto',
    id: 3
  },
  {
    author: 'yo',
    content: 'Jamas.',
    fecha: 'ayer a 15:37',
    estado: 'entregado',
    id: 4
  },
  {
    author: 'yo',
    content: 'Jamas.',
    fecha: 'ayer a 15:37',
    estado: 'entregado',
    id: 5
  },
  {
    author: 'yo',
    content: 'Jamas.',
    fecha: 'ayer a 15:37',
    estado: 'entregado',
    id: 6
  }
];

function App() {

  return (
    <>
    <Chatbot title="TripinDipy" DATA_MOOK={DATA_MOOK}/>
    </>
    
  )
}

export default App
