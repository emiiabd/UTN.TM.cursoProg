/* DOM = document object model = modelo objeto del documento */
//Document es una variable global que se crea al abrir la pagina
/* console.log(document) */
/* 
console.dir(document)

//Obtiene un elemento por id, si lo encuentra lo retorna (como objeto), sino, retorna null
const titulo = document.getElementById('titulo')
console.dir(titulo.innerText)


titulo.innerText = 'Hola' 


const cajaProducto = document.getElementById('caja-producto')
console.dir(cajaProducto)

cajaProducto.innerHTML = `
    <h2>Soy un subtitulo</h2>
    <p>Tv muy linda</p>
    <span>Precio: <b>$500</b></span>
`

const usuario = {
    nombre,
    apellido,
    direccion,
    edad
}

Mostarlo dentro de un div 

h2: Nombre completo: {nombre} {apellido}
span: Edad: {edad}
span: Direccion: {direccion}
*/

const usuario = {
  nombre: 'Peperino',
  apellido: 'Pomoro',
  direccion: 'Avenida Siempreviva 123',
  edad: '40'
}
const mostrar_usuario = document.getElementById("usuario")

usuario.innerHTML = `
<h2>nombre : ${usuario.nombre}<h2>
<h2>apellido : ${usuario.apellido}<h2>
<span>edad : ${usuario.edad}<span>
<span>direccion : ${usuario.direccion} <span>
`
console.dir(mostrar_usuario)
/* document.getElementById("usuario").innerHTML = `
<h2>nombre : ${usuario.nombre}<h2>
<h2>apellido : ${usuario.apellido}<h2>
<span>edad : ${usuario.edad}<span>
<span>direccion : ${usuario.direccion} <span>
`; */

/* const productos =[
  { nombre: 'tv samsung',
    precio:1500,
    id: 1,
    descripcion: 'asddddddddddddddddddddd',
    thumbnail: 'img',},
  { nombre: 'tv samsung',
    precio:1500,
    id: 1,
    descripcion: 'asddddddddddddddddddddd',
    thumbnail: 'img',},
  ]



const productosHTML = document.getElementById("productos")

let plantillaProductos=''
for(const producto of productos){
  plantillaProductos =  plantillaProductos + `
  <div>
    <h2> ${producto.nombre}</h2>
    <p>hola</p>`
}

productosHTML.innerHTML = plantillaProductos */

/* const carrito = [
  { nombre: 'Vaso',
    id: 1,
    precio: 250,
    cantidad: 2,
    img: 'https://http2.mlstatic.com/D_NQ_NP_637680-MLA45433102573_042021-O.webp'
  },
  { nombre: 'Vaso plastico',
    id: 2,
    precio: 200,
    cantidad: 6,
    img: 'https://packingenvases.com.ar/wp-content/uploads/2021/01/2976.png'
  },
  { nombre: 'Vaso Descartable',
    id: 3,
    precio: 120,
    cantidad: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA5ja2p4MhtPOi7qmw5cweWF7iNHfgfXe2w&s'
  },
]


const renderizarCarrito = (carrito) =>{
  const carritoHTML = document.getElementById("carrito");
  let plantillaCarrito = ``;
  let precioTotal = null;
  for(const producto of carrito) {
    plantillaCarrito = plantillaCarrito + `
    <div>
      <h3>${producto.nombre} id#${producto.id}</h3>
      <img width='200px' src="${producto.img}"/>
      <span>Precio unitario: ${producto.precio} x ${producto.cantidad} Unidades</span>
      <span>Total: ${producto.precio * producto.cantidad}</span>
    </div>
    <hr>
    
    `;

    precioTotal += producto.precio * producto.cantidad; 
  }

  const totalHTML = document.getElementById("precioTotal");

  carritoHTML.innerHTML = plantillaCarrito;
  totalHTML.innerHTML = "TOTAL: " + precioTotal;
}

 */