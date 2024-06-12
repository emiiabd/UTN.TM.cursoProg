/* 
Crear una funcion llamada registrarProducto
La funcion solicitara al usuario:
-Titulo: Debe ser un string con mas de 4 caracteres
-Precio: Debe ser un numero positivo mayor a 1
-Descripcion: Debe ser un string con almenos 10 caracteres
-Categoria: Debe ser un string que este dentro de las sig opciones ['tecnologia', 'hogar', 'otros']
-Marca: Debe ser un string con almenos 3 caracteres

Se solicitara siempre mediante uso de prompts

Se mostrara al usuario la sig plantilla/texto por prompt (para que pueda contestar):
Confirmar producto:
-Titulo: 'Mesa de trabajo de madera'
-Precio: '300'
-Descripcion: 'Mesa de trabajo ideal para astillarse'
-Categoria: 'hogar'
-Marca: 'Jorge el carpintero'
Si el usuario elige cancelar (con el button) o escribe 'CANCELAR' o 'NO' se volvera a comenzar
Si el usuario presiona aceptar o escribe 'SI' entonces la funcion creara un objeto del producto y lo mostrara por consola
*/

//FUNCIONES
const validarStr=(str, numero)=> str && isNaN(str) && str.length > numero
const validarTitulo=(str)=> validarStr(str,4)
const validarDescripcion=(str)=> validarStr(str,10)
const validarMarca=(str)=> validarStr(str,3)
const validarPrecio=(num)=> num && !isNaN(num) && num > 1
const validarCategoria=(str)=> CATEGORIAS.includes(str)
const confirmacion=(bool)=> {if(!bool){ return registrarProducto()}}

const solicitarDato =(obj)=>{ 
  let dato = prompt(obj.mensaje)
  while(!obj.validacion(dato) ){
    dato = prompt(obj.error)
  }
  return dato
}

//DICCIONARIOS
const CATEGORIAS=['tecnologia', 'hogar', 'otros']
const DATOS = {
  TITULO: {
    mensaje: 'Ingrese el titulo',
    error: 'Titulo no valido, tiene que tener mas de 4 caracteres',
    validacion: validarTitulo,
  },
  PRECIO: {
    mensaje: 'Ingrese el precio',
    error: 'Precio ingresado no valido, tiene que ser mayor que 1',
    validacion: validarPrecio,
  },
  DESCRIPCION: {
    mensaje: 'Ingrese una descripcion (al menos 10 caracteres)',
    error: 'Descripcion no valida, ingresa nuevamente la descripcion',
    validacion: validarDescripcion,
  },
  CATEGORIA: {
    mensaje: `Ingrese la categoria ${CATEGORIAS}`,
    error: `Ingrese nuevamente una categoria ${CATEGORIAS}`,
    validacion: validarCategoria,
  },
  MARCA: {
    mensaje: `Ingrese la marca`,
    error: `La marca tiene que tener al menos 3 caracteres`,
    validacion: validarMarca,
  },
}

//FUNCION DE REGISTRAR
const registrarProducto=()=>{
  /* const producto={
    titulo: null,
    precio: null,
    descripcion: null,
    categoria: null,
    marca: null
  }
  producto.titulo=solicitarDato(DATOS.TITULO)
  producto.precio=solicitarDato(DATOS.PRECIO)
  producto.descripcion=solicitarDato(DATOS.DESCRIPCION)
  producto.categoria=solicitarDato(DATOS.CATEGORIA)
  producto.marca=solicitarDato(DATOS.MARCA) */
  
  const producto={}
  for(const propiedad in DATOS){
    let dato =solicitarDato(DATOS[propiedad])
    producto[propiedad.toLowerCase()]=dato

  }

  confirmacion(confirm(`Confirmar producto (ACEPTAR o CANCELAR (Empezar de nuevo)): 
    Titulo: ${producto.titulo}
    Precio: ${producto.precio}
    Descripcion: ${producto.descripcion}
    Categoria: ${producto.categoria}
    Marca: ${producto.marca}`))
  
    return
}

registrarProducto()

