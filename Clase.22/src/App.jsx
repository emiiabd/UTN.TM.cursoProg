import React from 'react';
import ColorCard from './components/ColorCards/ColorCard';
import cards from './components/dataCards/dataCards';

function App() {
  return (
    <div className='cards-container'>
      {ColorCard(cards)}
    </div>
  );
};

export default App;

