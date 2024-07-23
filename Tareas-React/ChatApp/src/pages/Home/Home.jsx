import React from 'react'
import './Home.css'
import Contacts from '../../components/Contacts/Contacts'
import { DATA_MOOK } from '../../data/data'

const Home = () => {
  return (
    <div className='home'>
      <div className="chatTop">
        <p>Contactos</p>
      </div>
      <Contacts DATA_MOOK={DATA_MOOK}/>
    </div>
  )
}

export default Home