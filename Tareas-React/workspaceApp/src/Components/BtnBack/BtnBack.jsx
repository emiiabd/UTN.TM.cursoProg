import React from 'react'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const BtnBack = () => {
  return (
    <Link to={'../'} className='btnLogout' ><FiX /></Link>
  )
}

export default BtnBack