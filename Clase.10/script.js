/* alert('Hola mundo') */                                            /* ctrl + [] mover el codigo para izq o derecha */
// JS es un lenguaje interpretado por V8engine
// Nos marca la funcionalidad de una pagina web
// JS es un lenguaje 

/////////////////////////////////////////////////////////
//                  Tipos de datos                     //
/////////////////////////////////////////////////////////
/* 
// DATOS PRIMITIVOS: //

String => para interpretar textos
- 'hola', 'pepe', "Hola mundo", '3', `5` 

boolean => Para representar un estado booleano (t/f)
- true, false

number => Para representar datos numericos
- 1, -1, 1.1, NaN, Infinity

null => Para representar nulidad
- null

underfined => Para representar el estado indefinido
- undefined

// CONSTRUCTORES: //

Number() => transformar un dato a numero
String() => transformar un dato a string
Boolean() => transformar un dato a booleando


*/
/*///////////////////////////////////////////////////////
//              Operadores Aritmeticos                 //
/////////////////////////////////////////////////////////


// Devuelven string //
+ => concatenacion (Ocurre cuando hay un dato string, o mas de uno)

// Devuelve numero //
+ => suma
- => resta
* => multiplicacion
/ => division
% => resto de la division

*/

// concatenacion //
/* 
1 + '1'
String(1) + '1'
'1' + '1' = '11'

null + 'juan'
='nulljuan'

5 + true = 6

null + underfined
Number(null) + Number(underfined)
0 + NaN = NaN                       //La operacion de un NaN con cualquier numero te devuelve un NaN

'700000' + 10000
'70000010000'

Number('700000') + 10000 = 710000

'700000' - 10000 = 690000

9 + 0 = number = 9
0 + false = number = 0
false * null = number = 0
'' + 0 = String = '0'
'pepe' * 3 = Number = NaN

undefined - null + 'pepe' = String = 'NaNpepe'
(undefined - null) + 'pepe'
(number(undefined)-number(null)) + 'pepe'
(NaN - 0) + 'pepe'
NaN + 'pepe'
string(NaN) + 'pepe'
='NaNpepe'
*/

/*///////////////////////////////////////////////////////
//                   Comparadores                      //
/////////////////////////////////////////////////////////

Siempre devuelven un valor booleano (True/flase)

// excepciones //

- null solo es igual a null o undefined
- NaN no se puede comparar con nadie, no es igual a ningun otro DATO. En caso de querer comparar con NaN hay que utilizar la funcion isNaN(). isNaN(Number('pepe')) => true



== igualdad 
=== igualdad de valor y tipo de dato (estricta igualdad)
!=  diferencia
!== estricta diferencia (Valor y tipo de dato)
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que

*/


/*///////////////////////////////////////////////////////
//              Valores thurty y falsy                 //
/////////////////////////////////////////////////////////

Para saber si un valor es thurty o falsy hay que pasarlo a booleano
boolean(Valor a verificar) // true o false

Falsy:
- ''
- 0
- -0
- NaN
- false
- undefined
- null

*/


/* 
NaN == NaN = boolean = false
8 == NaN = boolean = false
5 == '5' = boolean = true
(1 === Boolean('1')) = boolean = false
3 + '' === '3' = boolean = true
*/