import React from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../../helpers/productos'
const Detail = () => {
  /* Retorna un objeto con los parametros de la busqueda */
  const parametros = useParams()
  console.log(parametros)

  const {
    nombre,
    descripcion,
    precio,
    id,
    stock,
    codigo,
    categoria,
  } = obtenerProductoPorId(parametros.producto_id)
  return (
    <div>
      <h1>{nombre}</h1> <br />
      <span>{categoria}</span>  <br />
      <p>{descripcion}</p>  <br />
      <span><b>Precio: </b>${precio}</span> <br />
      <span><b>Unidades disponibles: </b>{stock}</span> <br />
      <button>Comprar</button>
    </div>
  )
}

export default Detail