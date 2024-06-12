////// CARRITOS
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
];

const carrito2 = [
  {
    cantidad: 68,
    nombre: 'Vaso',
    id: 1,
    precio: 250,
    thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_637680-MLA45433102573_042021-O.webp'
  },
  {
    cantidad: 6,
    nombre: 'Vaso plastico',
    id: 2,
    precio: 100,
    thumbnail: 'https://packingenvases.com.ar/wp-content/uploads/2021/01/2976.png'
  },
  {
    cantidad: 1,
    nombre: 'Vaso Descartable',
    id: 3,
    precio: 50,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA5ja2p4MhtPOi7qmw5cweWF7iNHfgfXe2w&s'
  },
  {
    cantidad: 1,
    nombre: 'Vaso Descartable 2',
    id: 4,
    precio: 60,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA5ja2p4MhtPOi7qmw5cweWF7iNHfgfXe2w&s'
  },
];

//////// ITEMS PARA AGREGAR
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
];

//////// FUNCTIONS
const buscarID = (id, carrito) => carrito.find((item) => item.id === id);
const getElement = (elementById) => document.getElementById(elementById);

//////// MAIN FUNNCTIOS
const renderizarCarrito = (carrito) =>{
  const carritoHTML = getElement("carrito");
  const totalHTML = getElement("precioTotal");
  let plantillaCarrito = ``;
  let precioTotal = null;

  for(const producto of carrito) {
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

  carritoHTML.innerHTML = plantillaCarrito;
  totalHTML.innerText = "TOTAL: $" + precioTotal;
}

const eliminarItemPorId = (id, carrito) =>{        
  const itemBuscado = buscarID(id, carrito);

  if(itemBuscado){
    if(itemBuscado.cantidad === 1){
      //logica para eliminar item
      const posicionItem = carrito.findIndex((item) => item.id === id);
      carrito.splice(posicionItem,1);
    }else{
      //logica para decrementar
      itemBuscado.cantidad--;
    }
  }else{
    console.error('Item con ID inexistente');
  }
}

const agregarItemAlCarrito = (itemNew, carrito) =>{
  const itemBuscado = buscarID(itemNew.id, carrito);

  if(itemBuscado && itemBuscado.cantidad >= 1){
    //si se cumple, incrementar la cantidad en uno
    itemBuscado.cantidad++;
  }else{
    //si no se cumple agregar al carrito y colocarle la cantidad
    itemNew.cantidad = 1;
    carrito.push(itemNew);
  }
}

//////// TESTING
agregarItemAlCarrito(ITEMS[0], carrito);
agregarItemAlCarrito(ITEMS[0], carrito);
agregarItemAlCarrito(ITEMS[1], carrito);
agregarItemAlCarrito(ITEMS[1], carrito);
agregarItemAlCarrito(ITEMS[1], carrito2);
agregarItemAlCarrito(ITEMS[1], carrito2);
eliminarItemPorId(1, carrito2);


