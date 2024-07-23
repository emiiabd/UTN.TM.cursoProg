import React from 'react';
import { Link } from 'react-router-dom';
import {ProductList} from '../../Components';
import { useGlobalContext } from '../../Context/GlobalContext';

const Home = () => {

  const {products} = useGlobalContext();

  return (
    <div>
      <h1>Elige nuestros productos</h1>
      <h3>Crea un nuevo producto: </h3>
      <Link to={"/product/new"}>Aca</Link>
      <ProductList productos={products}/>
    </div>
  );
};

export default Home;