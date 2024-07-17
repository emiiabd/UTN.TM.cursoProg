import React, { useState } from 'react';
import { Chatbot } from './components/index';
import DATA_MOOK from './data/DATA_MOOK';

function App() {

  // STATES
  const [dataList, setDataList] = useState(DATA_MOOK);
  
// FUNCTIONS
  const validateAutomaticAwnsers = (list) => list[list.length-1].author === 'yo';
  

  const automaticAwnsers = () => setDataList([...dataList, 
    {
      author: 'pepe', 
      content: 'Esta es una respuesta automatica del bot', 
      fecha: 'ahora', 
      estado: 'enviado', 
      id: (dataList.length+1)
  }]);

  const handleSubmit = (e, textValue) =>{
    e.preventDefault();
    setDataList([...dataList, 
      {
        author: 'yo', 
        content: textValue, 
        fecha: 'ahora', 
        estado: 'enviado', 
        id: (dataList.length+1)
      }]);
  };

// VALIDATES
  if(validateAutomaticAwnsers([...dataList])){
    automaticAwnsers()
  };

  return (
    <>
    <div className='mainView'>
      <Chatbot title="TripinDipy" DATA_MOOK={[...dataList]} handleSubmit={handleSubmit} />
    </div>
    </>
    
  );
};

export default App;
