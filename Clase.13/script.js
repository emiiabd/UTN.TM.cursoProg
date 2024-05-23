// 1)
/* 
function sumatoria(a,b,c){
    return a+b+c;
}

function mayor(a,b){
    if (a>b){
        return a;
    }else{
        return b;
    }
}

function generarEmail(usuario){
    return usuario+'@gmail.com';
}

alert(generarEmail('pepe'))

*/

//
///////////// FUNCIONES FLECHAS ///////////////
//

/* const sumatoria = (a,b,c) =>{
    return a+b+c
}


const sumatoria = (a,b,c) => a+b+c

alert(sumatoria(1,2,3))
*/

//
// Validar string
//
/* 
const stringSolicitado =()=>{
    let palabra=prompt('Ingrese un dato');
    while(!palabra || !isNaN(palabra)){
        alert('Datos incorrectos');
        palabra=prompt('Ingrese un nuevo dato');
    }
    return palabra;
}

stringSolicitado(); */

//////// tarea: convertir las primeras tres funciones en arrows functions

const sumatoria = (a,b,c) =>a+b+c

const mayor=(a,b)=>{
    if (a>b){
        return a;
    }else{
        return b;
    }
}

const generarEmail=(usuario)=>usuario+'@gmail.com'
