import React from 'react'
import { ProductList } from '../../Components'
import productos from '../../Data/productsData'

const Home = () => {
  return (
    <div>
      <h1>Elige nuestros productos</h1>
      <ProductList productos={productos}/>
    </div>
  )
}

export default Home