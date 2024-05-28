/*///////////////////////////////////////////////////////
//                    OBJETOS                          //
/////////////////////////////////////////////////////////



let usuario = {
    'edad':19,
    'nombre':'pepe',
    'apellido':'suarez'
}
console.log(usuario)

Crear un objeto llamado producto que tenga las sig propiedades
precio : number
nombre : string
marca : string
id : number
descripcion : string */


// Formato key-value //

/* let producto={
    precio:3500,
    nombre:'Cronos',
    marca:'Fiat',
    id:1525,
    descripcion:'Auto fiat Cronos',
    nombreCompleto:{
        nombre:'Fiat cronos'
    }
}

alert('Produco nombre: '+producto['nombre']+producto['nombreCompleto']['nombre']) //acceder a la propiedad por corchetes (notacion de corchetes)


const user={
    name:'Pepe',
    lastname:'Suarez',
    'user preferences':{
        theme:'dark-mode',
        lang:'spanish'
    },
    'user info':{
        'create_at':'18/9/2005',
        'address':'Av siempre viva 742',
        tel:'+22 1323-2122'
    }
}

console.log('El usuario '+user['name']+' '+user['lastname']+' tiene las preferencias de usuario en: \nModo: '+user['user preferences']['theme']+'\nLenguaje: '+user['user preferences']['lang'])
console.log('El usuario '+user['name']+' '+user['lastname']+' creo su cuenta en fecha: '+user['user info']['create_at']+' vive en '+user['user info']['address']+' y su telefono es '+user['user info']['tel']) 


//
// TEMPLATE STRINGS
//

console.log(`El usuario ${user['name']} ${user['lastname']} tiene las preferencias en:
-Modo: ${user['user preferences']['theme']}
-Lenguaje: ${user['user preferences']['lang']}`)

console.log(`El usuario ${user['name']} ${user['lastname']} creo su cuenta en la fecha: ${user['user info']['create_at']}
Vive en: ${user['user info']['address']}
Y su telefono es: ${user['user info']['tel']}`)

// Reasignar un valor de una propiedad
user['name']='Juan'
// Crear una nueva propiedad
user['isAdmin']=false

//tambien lo podemos utilizar de la siguiente manera (notacion de puntos)

user.lastname='Gomez'
user.isAdmin=true

// NO se utiliza la notacion de puntos si la ppiedad tiene -, ñ, una tilde o espacios

console.log(user['name'])


// SIEMPRE QUE SE PUEDA: utilizar la notacion de puntos, y cuando no, notacion de corchetes //

console.log(`El usuario ${user.name} ${user.lastname} tiene las preferencias en:
-Modo: ${user['user preferences'].theme}
-Lenguaje: ${user['user preferences'].lang}`)

console.log(`El usuario ${user.name} ${user.lastname} creo su cuenta en la fecha: ${user['user info'].create_at}
Vive en: ${user['user info'].address}
Y su telefono es: ${user['user info'].tel}`)
*/

/* Crear una funcion llamada
calcularIva(precio, tipo_factura)
tipo_factura 'A', 'C', 'B'
En el caso de si la factura es C o B el precio tendra el iva incluido
Ejemplo
calcularIva(100, 'C' | 'B')
{
    precio: 121
    iva: 21
    precioConIva: 121,
    factura: 'B' | 'C'
}
En el caso de si la factura es A el precio tendra el iva discriminado
Ejemplo
calcularIva(100, 'A')
{
    precio: 100
    iva: 21
    precioConIva: 121,
    factura: 'A'
}
{
    precio: number
    iva: number
    precioConIva,
    factura:
} */

/// funcion mejorada ///

const calcularIva=(precio, tipo_factura)=>{
    let iva=precio*0.21
    const resultado ={
        precioUnitario:null,
        iva: iva,
        precioConIVA: precio+iva,
        factura: tipo_factura
    }
    if(tipo_factura==='B'.toLowerCase() || tipo_factura==='C'.toLowerCase()){
        resultado.precioUnitario=resultado.precioConIVA
    }else if(tipo_factura==='A'.toLowerCase()){
        resultado.precioUnitario=precio
    }
    return resultado
}

console.log(calcularIva(1000,'a'))