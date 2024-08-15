import { createContext, useContext, useState } from "react";
import { eliminarProductoPorId, obtenerProductos } from "../helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) =>{
  const [products,  setProducts] = useState(obtenerProductos());
  const navigate = useNavigate();

  const handleDeleteProduct = (id) =>{
    setProducts(eliminarProductoPorId(id));
    navigate('/');
  }


  return(
    <GlobalContext.Provider value={{products: products, handleDeleteProduct: handleDeleteProduct}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)