import React from 'react'

export const ProductNew = () => {
  return (
    <div>
      <form>
        <h1>Ingresar un producto</h1>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id='nombre' name='nombre'/>
        </div>
        <div>
          <label htmlFor="descripcion">Descripcion: </label>
          <input type="text" id='descripcion' name='descripcion'/>
        </div>
        <div>
          <label htmlFor="precio">Precio: </label>
          <input type="text" id='precio' name='precio'/>
        </div>
        <div>
          <label htmlFor="stock">Stock: </label>
          <input type='text' id='stock' name='stock'/>
        </div>
        <div>
          <label htmlFor="codigo">Codigo: </label>
          <input type="text" id='codigo' name='codigo'/>
        </div>
        <div>
          <label htmlFor="categoria">Categoria: </label>
          <input type="text" id='categoria' name='categoria'/>
        </div>
      </form>
    </div>
  )
}
