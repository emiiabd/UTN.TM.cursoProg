/* This is a AutomaticAwnsers component but it is not used */
import React from 'react'

const AutomaticAwnser = ({list, setDataList}) => {
  const validateAutomaticAwnsers = (list) => list[list.length-1].author === 'yo';
  

  /*   const automaticAwnsers = () => setDataList([...dataList, 
      {
        author: 'pepe', 
        content: 'Esta es una respuesta automatica del bot', 
        fecha: 'ahora', 
        estado: 'enviado', 
        id: (dataList.length+1)
    }]); */
  
  // VALIDATES
  /*   if(validateAutomaticAwnsers([...dataList])){
    automaticAwnsers()
  }; */


  return (
    setDataList([...dataList, 
      {
        author: 'pepe', 
        content: 'Esta es una respuesta automatica del bot', 
        fecha: 'ahora', 
        estado: 'enviado', 
        id: (dataList.length+1)
    }]) 
  )
}

export default AutomaticAwnser