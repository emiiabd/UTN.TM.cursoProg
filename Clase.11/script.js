/*///////////////////////////////////////////////////////
//              operadores logicos                     //
/////////////////////////////////////////////////////////

! NOT =>

|| OR => o logico, siempre que el primer valor es falso elige el segundo. si el primer valor es true elige el primero

&& AND => SIEMPRE QUE EL PRIMER VALOR ES TRUE, DEVUELVE EL SEGUNDO
*/


/* let resultado = '' || 'pepe'
console.log(resultado) */

/* 
quiero dejar pasar a alguien que tenga mas de 18 o mas de 100000

edad = 29
dinero 100

condicion = edad > 18 || dinero > 100
condicion = true || false
condicion = true

edad = 10
dinero 100000

condicion = edad > 10 || dinero > 100000
condicion = false || true
condicion = true

edad = 10
dinero 10

condicion = edad > 10 || dinero > 10
condicion = false || false          //si el primero es falso toma el segundo valor (sea verdadero o falso)
condicion = false

////////////////////////////////////////

si el usuario tiene nombre o email lo registro

nombre = 'pepe'
email = ''

condicion = nombre || email
condicion = 'pepe'


nombre = ''
email = 'pepe@gmail.com'

condicion = nombre || email
condicion = 'pepe@gmail.com'


nombre = ''
email = ''

condicion = nombre || email
condicion = ''

///////////////////////////////////////

edad = 60
dinero = 900

condicion = edad >= 18 && dinero > 6000
condicion = dinero > 6000
condicion = false

/////////////////////////
// TABLAS DE LA VERDAD //
/////////////////////////

OR
true || true = true
false || true = true
true || false = true
false || false = false

AND
true && true = true
false && true = false
true && false = false
false && false = false


*/


/* 
//siempre que se compara NaN es un false y si se niega, da true
!(NaN == NaN) || 'pepe'   = true

'pepe' * 1 + '' && 0      = 0

9 * '9' * null || 'pepe' && 'juan'

81 * null || 'pepe' && 'juan'

0 || 'pepe' && 'juan'

'pepe' && 'juan'

'juan'


!(''+0-0 * !null + false) && 'juan' || 'pepe' || 'maria'

    !(0 * number(True) + false)
    true && 'juan' || 'pepe' || 'maria'
    'juan' || 'pepe' || 'maria'
    'juan'

*/


/*///////////////////////
// ORDEN DE PRIORIDAD  //
/////////////////////////

Primero va el NOT (!), despues el AND (&&) y por ultimo el OR (||)
*/

/*///////////////////////////////////////////////////////
//                      variables                      //
/////////////////////////////////////////////////////////

//VAR
El valor por defecto de var es undefined (si no le definis un valor)
La variable de tipo VAR tiene un alcance(SCOPE) global (No importa si la definis dentro o fuera de un bloque)

var nombre = 'pepe'

sintaxis => (tipo de varialble) identificador = dato



//declaracion or innicializacion (implicito)
var edad
//inicializacion de la variable (explicito)
var nombre = 'pepe'
//re-asignacion
edad = 26

console.log(edad)


//VAR ES5

Tiene Hoisting? SI
Tiene valor implicito en underfined? SI
Se puede reasignar? SI
se puede redeclarar? SI


//////LET ES6+//////

La variable de tipo LET tiene un alcance(SCOPE) LOCAL (para los bloques)

Tiene Hoisting? NO
Tiene valor implicito en underfined? SI
Se puede reasignar? SI
se puede redeclarar? NO



//declarando e inicializando la variable de manera implicito
let edad

//declarando e inicializando la variable de manera explicita
let nombre = 'pepe'

console.log(edad)
console.log(nombre)


//CONST ES6+

Tiene Hoisting? NO
Tiene valor implicito en underfined? NO
Se puede reasignar? NO
se puede redeclarar? NO
*/

/* const nombre = 'pepe'
console.log(nombre) */

/*///////////////////////////////////////////////////////
//          Scope and block (Bloques y alcance)        //
/////////////////////////////////////////////////////////


let nombre = 'pep2e'
//Crear un bloque
{
    let nombre = 'pepe'
    console.log(nombre)
    {
        nombre = 'juan' => va a reasignar la variable externa
    }
    {
        let nombre = 'juan' => va a redeclarar una variable interna llamada nombre
    }
}

console.log(nombre)

let nombre = 'pedro'
console.log(nombre)
{
    let nombre = 'alexis'
    {
        let nombre = 'juan'
        console.log(nombre)
    }
    console.log(nombre)
    {
        nombre = 'damian'
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre)

pedro
juan
alexis
damian
damian
pedro

*/
/*///////////////////////////////////////////////////////
//                  IF (Conditional)                   //
/////////////////////////////////////////////////////////

Sintaxis:
if(condicion){
    bloque de codigo
}

if verifica que la condicion sea truthy
else se ejecuta cuando la condicion del if sea falsy

ELSE DEBE IR LUEGO DEL BLOQUE IF
*/
/* let nombre='pepa'
if(nombre === 'pepe'){
    console.log('Te dejo pasar')
}
else{
    console.log('No te dejo pasar')
} */

/* let email = prompt('Ingresa tu email:')
console.log(email)

if(email){
    console.log('Correcto')
    console.log(email)
}else{
    console.log('Email incorrecto')
} */

/* 
Solicitar al usuario una edad y un lenguaje favorito

Si su edad es mayor a 16 y su lenguaje favorito es 'JS'
mostrar por consola 'Bienvenido al desarrollo web frontend'
mostrar por consola 'No se puede ser perfecto en todo'
*/

/* let edad = prompt('Ingresa tu edad')
let lenguaje_fav = prompt('Ingresa tu lenguaje Favorito')

if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}else{
    console.log('No se puede ser perfecto en todo')
} */

/* 
Solicitar al usuario una edad y un lenguaje favorito

Si su edad es mayor a 16 y su lenguaje favorito es 'JS'
mostrar por consola 'Bienvenido al desarrollo web frontend'
Si su edad es mayor a 14 y su lenguaje favorito es 'PHP'
mostrar por consola 'Bienvenido al desarrollo web backend'
sino
mostrar por consola 'No se puede ser perfecto en todo'
*/

/* let edad = prompt('Ingresa tu edad')
let lenguaje_fav = prompt('Ingresa tu lenguaje Favorito')

if(edad > 16 && lenguaje_fav === 'JS'){
    console.log('Bienvenido al desarrollo web frontend')
}
else if(edad > 14 && lenguaje_fav === 'PHP'){
    console.log('Bienvenido al desarrollo web backend')
}
else{
    console.log('No se puede ser perfecto en todo')
} */