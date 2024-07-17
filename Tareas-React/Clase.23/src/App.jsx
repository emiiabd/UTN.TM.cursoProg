import React, { useState } from 'react'
import Chatbot from './components/Chatbot/Chatbot';
import DATA_MOOK from './data/DATA_MOOK';

function App() {

  const [dataList, setDataList] = useState(DATA_MOOK);

  const automaticAwnsers = () => {
    setDataList([...dataList, {author: 'pepe', content: 'Esta es una respuesta automatica del bot', fecha: 'ahora', estado: 'enviado', id: (dataList.length+1)}])
  }

  if(dataList[dataList.length-1].author == 'yo'){
    automaticAwnsers()
  }

  const clearTextBox = () => {
    document.getElementById('textBoxInput').value = '';
  }
  const handleSubmit = (e, textValue) =>{
    e.preventDefault();
    setDataList([...dataList, {author: 'yo', content: textValue, fecha: 'ahora', estado: 'enviado', id: (dataList.length+1)}])
  }
  

  return (
    <>
    <div className='mainView'>
      <Chatbot title="TripinDipy" DATA_MOOK={[...dataList]} handleSubmit={handleSubmit} clearTextBox={clearTextBox}/>
    </div>
    </>
    
  )
}

export default App
