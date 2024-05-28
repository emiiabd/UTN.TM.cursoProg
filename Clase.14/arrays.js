/////////// ARRAYS //////////////
//                 [0]    [1]     [2]
/* const nombres = ['pepe','pepe2','pepe3'];

console.log(nombres[1]);

console.log('tengo '+nombres.length+' nombres');
 */
//////////////
//push() agrega un elemento al final del array y devuelve una nueva longitud

/* nombres.push('pepe4') */

//////////////
//unshift() agrega un elemento al principio del array y devuelve una nueva logintud

/* nombres.unshift('maria')
console.log(nombres) */


/* let nombre='pppe'
nombre=nombre.toUpperCase()
console.log(nombre) */   

//////////////
// pop() elimina el ultimo elemento y nos lo retorna

/* let Ultimoelemento=nombres.pop()
console.log(nombres) */

//////////////
// shift() elimina el primer elemento y lo retorna

////////////// SOLAMENTE FUNCIONA BIEN CON LOS ARRAYS DE STRING
// .indexOF() devuelve la posicion de un STRING

/* let posicionNombre=nombres.indexOf('pepe2')
console.log('La posicion de pepe2 es: '+posicionNombre) */

//////////////
//.splice()    Te permite elminar un elemento del array, partiendo desde una posicion dada y le das cuantos elementos queres eliminar

//-1er parametro: Donde se va a posicionar
//-2do parametro: Cantidad de elementos que quieres eliminar
//-3er parametro: Elemento que quieres agregar

/* nombres.splice(posicionNombre,1)
console.log(nombres) */

/* const names2=['maria','juan','pedro','leonel','elias','ezequiel']

let positionName=names2.indexOf('leonel')
console.log('La posicion de leonel es: '+positionName)

const deletedItems=names2.splice(positionName,0,'emi')
console.log(names2)
console.log('La lista de eleminados es: '+deletedItems) */

const names3=['maria','pedro','leonel','ezequiel','elias','lucas','julieta','abril','lautaro']

//Eliminar a leonel
//Eliminar a el anterior a lucas
//agregar antes de abril a 'sofia' sin eliminar a abril

/* let leonelPosition = names3.indexOf('leonel')
names3.splice(leonelPosition,1)

let lucasPosition = names3.indexOf('lucas')
names3.splice((lucasPosition-1),1)

let abrilPosition = names3.indexOf('abril')
names3.splice((abrilPosition),0,'sofia')
console.log(names3) */

//////////////
// console.log(names3.includes('leonel')) //te devuelde un booleano (true/false)

/* console.log(names3[0])

for(let i=0; i<names3.length; i++){
    console.log(names3[i])
} */

// Dado el arrays de nams, por cada nombre sumes la cantidad de caracteres del nombre. Al finalizar el recorrido mostrar la sumatoria
/* let charactersTotal = 0
for(let i=0; i<names3.length; i++){
    charactersTotal = charactersTotal + names3[i].length
}

console.log('La cantidad de caracteres es: ' + charactersTotal) 

for(let name of names3){
    console.log(name)
}*/

// Dado el siguiente array crear un segundo arrays llamado mayusculas que solo contenga las palabras en mayusculas
/* const array = ['pepe', 'lucas', 'PEDRO', 'JuaN', 'pepeSito', 'pepesote'] */
// Esto debe denerar un segundo array con ['PEDRO', 'JuaN']

/* for( let nombre of array){
    if(nombre == !nombre.toUpperCase){
        const nombres = array[nombre]
        console.log(nombres)
    }
    
} */

/* const nombresEnMayusculas=[];
const mayusculas = (str) => str !== str.toLowerCase()

for(let nombre of array){
    if(mayusculas(nombre)){
        nombresEnMayusculas.push(nombre)
    }
}
console.log(nombresEnMayusculas) */

const productos = [
    {
        title: 'tv samsung 32"',
        price: 3000,
        marca: 'samsung',
    },
    {
        title: 'tv samsung 50"',
        price: 4600,
        marca: 'samsung',
    },
    {
        title: 'tv lg 42"',
        price: 3500,
        marca: 'lg',
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex',
    },
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex',
    }
]

const resultado=[]

for(const producto of productos){
    if(producto.marca === 'samsung'){
        resultado.push(producto)
    }
}
console.log(resultado)


//Crear una funcion que se llame buscarProductos(string) que reciba un string y por cada producto del array de productos verificara si el 
// titulo tiene incluido el string buscado
// esta funcion debe retornar un array de productos