let A = Number(prompt('Por favor introduzca la longitud del lado A del triangulo: '))
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
}