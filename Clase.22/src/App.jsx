import React from 'react';
import ColorCard from './components/ColorCards/ColorCard';

const cards =[
  {
    colors: ['#1A6D2E','#4F6F52','#E8DFCA','#F5EFE6'],
    likes: '5,452',
    date: '17 Hours'
  },
  {
    colors: ['#124123','#4F6F52','#E8DFCA','#F5EFE6'],
    likes: '10,452',
    date: '3 Hours'
  },
  {
    colors: ['#487798','#4F6F52','#E8DFCA','#F5EFE6'],
    likes: '11,500',
    date: '18 Hours'
  },
  {
    colors: ['#1A4365','#4F6F52','#E8DFCA','#F5EFE6'],
    likes: '152',
    date: '36 Hours'
  },
  ///////
  {
    colors: ['#1A6D2E','#4F6da2','#E8D23A','#F5EFE6'],
    likes: '5,452',
    date: '17 Hours'
  },
  {
    colors: ['#124123','#4F6F52','#E8DFCA','#F5dFE6'],
    likes: '89,452',
    date: '5 Hours'
  },
  {
    colors: ['#489639','#4Fkk52','#EaaFCA','#F532E6'],
    likes: '500',
    date: '2 Hours'
  },
  {
    colors: ['#1ai365','#426F52','#E8DFCA','#F5EFE6'],
    likes: '1,252',
    date: '30 Hours'
  },
  /////
  {
    colors: ['#189D2E','#4F6F52','#E23FCA','#F5EFE6'],
    likes: '5,452',
    date: '11 Hours'
  },
  {
    colors: ['#12ll23','#4F6F52','#E8DFCA','#aaEFE6'],
    likes: '10,002',
    date: '1 Hours'
  },
  {
    colors: ['#487798','#4F6F52','#E8DFCA','#F23FE6'],
    likes: '115,500',
    date: '8 Hours'
  },
  {
    colors: ['#1A4365','#4F6F52','#E8DFCA','#F5EFE6'],
    likes: '333',
    date: '26 Hours'
  },
];

function App() {
  return (
    <div className='cards-container'>
      {ColorCard(cards)}
    </div>
  );
};

export default App;

