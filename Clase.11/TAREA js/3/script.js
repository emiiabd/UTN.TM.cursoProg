/* let A = Number(prompt('Por favor introduzca la longitud del lado A del triangulo: '))
let B = Number(prompt('Por favor introduzca la longitud del lado B del triangulo: '))
let C = Number(prompt('Por favor introduzca la longitud del lado C del triangulo: '))

if(A<=0 || B<=0 || C<=0){
    console.log('Longitudes no validas')
}else if(A===B && B===C){
    console.log('El triangulo formado es un triangulo Equilatero')
}else if(A===B || B===C || A===C){
    console.log('El triangulo formado es un triangulo Isosceles')
}else{
    console.log('El triangulo formado es un triangulo Escaleno')
} */


/* Utilizando funciones y arrays para mejorarlo */

const triangulosTipo =()=>{
    const lados=['A','B','C']
    const longitudes=[]
    for(let i=0; i<lados.length; i++){
        longitudes.push(prompt(`Por favor introduzca la longitud del lado ${lados[i]} del triangulo: `))
    }
    if(longitudes[0]<=0 || longitudes[1]<=0 || longitudes[2]<=0){
        return alert('Longitudes no validas')
    }else if(longitudes[0]===longitudes[1] && longitudes[1]===longitudes[2]){
        return alert('Es un triangulo Equilatero')
    }else if(longitudes[0]===longitudes[1] || longitudes[1]===longitudes[2] || longitudes[0]===longitudes[2]){
        return alert('Es un triangulo Isosceles')
    }else{
        return alert('Es un triangulo Escaleno')
    }
}

triangulosTipo()