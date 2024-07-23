import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Chat, Home } from './pages/index';

function App() {
  
  return (
  <>
  <div className='mainView'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat/:id" element={<Chat/>}/>
    </Routes>
  </div>
  </>
  
  );
};

export default App;
/* 
  return (
    <>
    <div className='mainView'>
      <ChatRender title="TripinDipy" DATA_MOOK={[...dataList]} handleSubmit={handleSubmit} />
    </div>
    </>
    
  ); */
