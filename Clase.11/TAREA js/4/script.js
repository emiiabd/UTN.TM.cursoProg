/* let days = Number(prompt('Ingrese un numero del 1 al 7 por favor: '))
if(days<1 || days>7){
    alert('Numero no valido')
}else if(days===1){
    console.log('Lunes')
}else if(days===2){
    console.log('Martes')
}else if(days===3){
    console.log('Miercoles')
}else if(days===4){
    console.log('Jueves')
}else if(days===5){
    console.log('Viernes')
}else if(days===6){
    console.log('Sabado')
}else{
    console.log('Domingo')
} */

/* Utilizando funciones, objetos y arrays */

const mostrarDia =()=>{
    const dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
    let dia=Number(prompt('Ingrese un numero del 1 al 7'))
    while(dia<1 || dia>7){
        alert('Numero no valido')
        dia=Number(prompt('Ingrese un numero del 1 al 7'))
    }
    if(dia===1){
        dia=dias[0]
    }else if(dia===2){
        dia=dias[1]
    }else if(dia===3){
        dia=dias[2]
    }else if(dia===4){
        dia=dias[3]
    }else if(dia===5){
        dia=dias[4]
    }else if(dia===6){
        dia=dias[5]
    }else{
        dia=dias[6]
    }
    return alert(dia);
}

mostrarDia()