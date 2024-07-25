import React from 'react';
import { Link } from 'react-router-dom';
import {ProductList} from '../../Components';
import { useGlobalContext } from '../../Context/GlobalContext';
import './home.css';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const {products} = useGlobalContext();

  console.log(user)
  return (
    <div>
      <div className="imgContainer">
        <img src="../../imagenes/Juan.jpg" alt="" />
      </div>
      <Link to={"/login"}>Iniciar Sesion </Link>
      <br />
      {user.role === 'admin' && <Link to={"/product/new"}>Crear un producto</Link>}
      <h1>Elige nuestros productos</h1>
      
      <ProductList productos={products}/>
    </div>
  );
};

export default Home;