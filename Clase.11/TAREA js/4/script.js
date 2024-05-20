let days = prompt('Ingrese un numero del 1 al 7 por favor: ')
if(days<1 || days>7){
    alert('Numero no valido')
}else if(days==1){
    console.log('Lunes')
}else if(days==2){
    console.log('Martes')
}else if(days==3){
    console.log('Miercoles')
}else if(days==4){
    console.log('Jueves')
}else if(days==5){
    console.log('Viernes')
}else if(days==6){
    console.log('Sabado')
}else{
    console.log('Domingo')
}
