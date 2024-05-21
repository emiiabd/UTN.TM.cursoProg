/*///////////////////////////////////////////////////////
//                      WHILE                          //
/////////////////////////////////////////////////////////

El bucle while repite un bloque de codigo mientras se cumpla x condicion

*/

/* let num = prompt('Ingrese un numero')
if(!num || isNaN(num)){
    alert('Error, dato no valido')
    num = prompt('Ingrese nuevamente un numero')
} else {
    caso
} 

let num = prompt('Ingrese un numero')
while(!num || isNaN(num)){
    alert('Error, dato no valido')
    num = prompt('Ingrese nuevamente un numero')
}*/

///Solicitar un string al usuario y validar que sea un string valido
//Casos unvalidos:
// ''
// null
// number (cualquier tipo de number excepto el NaN)


/////////KISS keep it simple stupid///////
/* let nomb = prompt('Ingrese su nombre')

while(!nomb || !isNaN(nomb)){
    alert('Error de dato')
    nomb = prompt('Ingrese su nombre')
}

console.log(nomb) */

// siempre mantener el codigo para que alguien ma slo pueda entender, nunca crear abreviaciones propias
/* let text = prompt('Ingrese su nombre')

while(!text || !isNaN(text)){
    alert('Error de dato')
    text = prompt('Ingrese su nombre')
}

console.log(text)  */

/*///////////////////////////////////////////////////////
//                      FOR                            //
/////////////////////////////////////////////////////////

Es un bucle que usamos cuando queremos repetir un bloque de codigo una deterrminada cantidad de veces

*/

//di por consola hola 5 veces

/*//DRY= dont repeat yourself//

console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')
console.log('hola mundo')*/

// for(let i/* Iterador */=1; i<=5; i=i+1){
//    console.log('hola mundo '+i)
//} 

// Solicitar un nombre y mostrarlo por alerta

/* for(let iterador=1;iterador<=3;iterador=iterador+1){
    let nombre = prompt('Indique un nombre')
    alert(nombre)
} */

/// Solicitar 3 nombres y al final mostrarlos en lista ///
/* let listaDeNombre= 'Lista de nombres: '
for(let i=1;i<=3;i++){
    let nombre=prompt('ingrese un nombre')
    listaDeNombre=listaDeNombre+'\n'+nombre
}
alert(listaDeNombre) */

// Vamos a solicitar un numero 3 veces y al finalizar mostrar el resultado de la sumatoria de los 3 numero
/* let listadenumeros=0
for(let i=1;i<=3;i++){
    let numero=Number(prompt('ingrese un numero'))
    listadenumeros= listadenumeros + numero
}

alert(listadenumeros) */

/////////////////////////////////////

/* let sumatoria=0
let cantidad = prompt('Ingrese una cantidad de repeticiones')
while(!cantidad || isNaN(cantidad)){
    alert('Error, dato no valido')
    cantidad = prompt('Ingrese nuevamente una cantidad de repeticiones')
}
for(let i=1;i<=cantidad;i++){
    let numero=prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        alert('Error, dato no valido')
        numero = prompt('Ingrese nuevamente un numero')
    }
    sumatoria= sumatoria + Number(numero)
}
alert('La sumatoria es: '+sumatoria)
 */

/*///////////////////////////////////////////////////////
//                   FUNCIONES                         //
/////////////////////////////////////////////////////////


// Declarar una funcion
function saludar(nombre){
    alert('Hola a '+nombre)
}

//invocar una funcion
// saludar()
saludar('pepe')

//f(x)=2x+1

// Crear una funcion llamada sumar que reciba dos numeros y muestre por consola el resultado de la suma de ambos numeros
let sumatoria=0
function sumar(x,y){
    sumatoria=x+y
    console.log(sumatoria)
}

sumar(2,5)


// Crear una funcion llamada calcularIva que reciba un precio y muestre el iva por consola de dicho precio

function calcularIva(importe){
    console.log(importe*0.21)
}

calcularIva(100)

// Funcion con retorno
function calcularIva(importe){
    return importe*0.21
}

let iva = calcularIva(100)

alert(iva)
console.log(iva)

alert(calcularIva(200))
*/
function validarNumero(dato){
    let numero = prompt('Ingrese '+dato)
    while(!numero || isNaN(numero)){
        alert('Error, dato no valido')
        numero = prompt('Ingrese nuevamente '+dato)
    }
    return Number(numero)
}

let sumatoria=0
let cantidad=validarNumero('cantidad de repeticiones')
for(let i=1;i<=cantidad;i++){
    let numero=validarNumero('un numero')
    sumatoria= sumatoria + numero
}
alert('La sumatoria es: '+sumatoria)