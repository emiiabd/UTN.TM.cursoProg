
const carrito = [
  {
    cantidad: 2,
    nombre: 'Vaso',
    id: 1,
    precio: 250,
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_637680-MLA45433102573_042021-O.webp'
  },
  {
    cantidad: 6,
    nombre: 'Vaso plastico',
    id: 2,
    precio: 200,
    thumbnail: 'https://packingenvases.com.ar/wp-content/uploads/2021/01/2976.png'
  },
  {
    cantidad: 5,
    nombre: 'Vaso Descartable',
    id: 3,
    precio: 120,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA5ja2p4MhtPOi7qmw5cweWF7iNHfgfXe2w&s'
  },
  {
    cantidad: 1,
    nombre: 'Vaso Descartable 2',
    id: 4,
    precio: 120,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA5ja2p4MhtPOi7qmw5cweWF7iNHfgfXe2w&s'
  },
]


const renderizarCarrito = (str) =>{
  const carritoHTML = document.getElementById("carrito");
  let plantillaCarrito = ``;
  let precioTotal = null;
  for(const producto of str) {
    plantillaCarrito += `
    <div>
      <h3>${producto.nombre} id#${producto.id}</h3>
      <img width='200px' src="${producto.thumbnail}"/>
      <br>
      <span>Precio unitario: ${producto.precio} x ${producto.cantidad} Unidades</span>
      <br>
      <span>Total: ${producto.precio * producto.cantidad}</span>
    </div>
    <hr>
    
    `;

    precioTotal += producto.precio * producto.cantidad; 
  }

  const totalHTML = document.getElementById("precioTotal");

  carritoHTML.innerHTML = plantillaCarrito;
  totalHTML.innerText = "TOTAL: $" + precioTotal;
}
/* 
const eliminarItemPorId = (id, str) =>{
  for(const item of str){
    if(item.id == id && item.cantidad > 1){
      str.splice
    }
  }
}


} */
const buscarPosicionItem = (id, str) =>{
  for(let i = 0; i < str.lenght; i++){
    ////
  }
}

const eliminarItemPorId = (id, carrito) =>{        // Condicion, devuelve la condicion o undefined
  const itemBuscado = carrito.find((item) => item.id === id)
  console.log(itemBuscado)
  /* const itemBuscado = carrito.find((item) => {
  return item.id === id
  }) */
  if(itemBuscado){
    if(itemBuscado.cantidad === 1){
      //logica para eliminar item
      const posicionItem = carrito.findIndex((item) => item.id === id)
      carrito.splice(posicionItem,1)
    }else{
      //logica para decrementar
      itemBuscado.cantidad--
    }
    renderizarCarrito(carrito)
  }else{
    console.error('Item con ID inexistente')
  }
  console.log(itemBuscado)
  
}

/* eliminarItemPorId(4, carrito)
eliminarItemPorId(1, carrito) */

/* 
Crear la funcion llamada agregarItemAlCarrito(item)
Item es un objeto con 
{
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
}
Buscar si en carrito ya existe un elemento con ese id
SI existe unicamente incrementaran su cantidad en 1

SI no existe van a agregarlo al carrito y van a crear una propiedad para ese item llamada cantidad y con el valor 1

EJEMPLO DE USO:

agregarItemAlCarrito({
        nombre: 'Toyota GR86',
        id: 2,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Va a incrementar la cantidad de toyota en 1 en el carrito PORQUE YA EXISTE

agregarItemAlCarrito({
        nombre: 'Honda Civic',
        id: 20,
        precio: 25000,
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
})
Se agrega al array carrito pero con la propiedad cantidad en 1 */
const ITEMS = [
  { 
    nombre: 'Vaso',
    id: 1,
    precio: 250,
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_637680-MLA45433102573_042021-O.webp'},
  {
    nombre: 'Honda Civic',
    id: 20,
    precio: 25000,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAApjDiM2t4OqVSjXoJWwNFl4k32NArjLSQ&s"
  }

]

const agregarItemAlCarrito = (itemNew, carrito) =>{
  const itemBuscado = carrito.find((item) => item.id === itemNew.id);
  if(itemBuscado){
    if(itemBuscado.cantidad > 1){
      //si se cumple, incrementar la cantidad en uno
      itemBuscado.cantidad++;
    }
  }else{
    //si no se cumple agregar al carrito y colocarle la cantidad
/*    const objNew = `
    nombre: ${itemNew.nombre},
    id: ${itemNew.id},
    precio: ${itemNew.precio},
    cantidad: 1,
    thumbnail: ${itemNew.thumbnail}` */
    itemNew.cantidad = 1;
    carrito.push(itemNew)
  }
  
}

agregarItemAlCarrito(ITEMS[0], carrito)
agregarItemAlCarrito(ITEMS[1], carrito)