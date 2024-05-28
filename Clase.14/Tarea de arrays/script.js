/* 
Crear una funcion que se llame buscarProducto(string) recibira un string y por cada producto del array 
de productos verificara si el titulo tiene incluido el string buscado
Esta funcion debe retornar un array de productos

EJEMPLO:
buscarProducto('noblex') //retorna:  
[ 
    {
        title: 'tv noblex 65"',
        price: 6000,
        marca: 'noblex'
    },
    {
        title: 'tv noblex 50"',
        price: 4500,
        marca: 'noblex'
    }
]
buscarProducto('celular')
[
    {
        title: 'celular samsung 64gb',
        price: 4500,
        marca: 'samsung'
    },
    {
        title: 'celular samsung 128gb',
        price: 4500,
        marca: 'samsung'
    }
]

*/
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


const busqueda=(str)=>{
    const buscar=str.toLowerCase()
    const resultado=[]
    for(const i of productos){
        if(i.title.includes(buscar)){
            resultado.push(i)
        }
    }
    if(resultado.length == 0){
        return console.log('La palabra buscada no pudo ser encontrada')
    }else{
        return resultado
    }
}
// NOBLEX
console.log(busqueda('noblex'))
// SAMSUNG
console.log(busqueda('SAMSUNG'))