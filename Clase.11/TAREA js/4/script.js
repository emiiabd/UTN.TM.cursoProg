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

//DICCIONARIO


/*  const mostrarDia =()=>{
    const dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
    let dia=Number(prompt('Ingrese un numero del 1 al 7'))
    while(dia<1 || dia>7){
        alert('Numero no valido')
        dia=Number(prompt('Ingrese un numero del 1 al 7'))
    }} */

const validarNum=(num)=> num && !isNaN(num) && num<=7 && num>=1
const validarDia=(str)=> DIAS.hasOwnProperty(str)

const solicitarDato=(obj)=>{
    let dato=prompt(obj.mensaje)
    while(!obj.valida(dato)){
        dato=prompt(obj.errorMsj)
    }
    return dato
}
const DIAS={
    1:'lunes' , 2:'Martes' , 3:'Miercoles' , 4:'Jueves' , 5:'Viernes' , 6:'Sabado' , 7:'Domingo'
}

const DATO={
    TITULO: {
        mensaje:'Ingrese un numero del 1 al 7',
        errorMsj: 'Numero no valido, ingrese un numero nuevamente',
        valida:validarNum,
    },
}

const mostrarDia =()=>{
    const dia=solicitarDato(DATO.TITULO)
    if(validarDia(dia)){
        return console.log(DIAS[dia])
    }else{
        return alert('404 Error')
    }
}
mostrarDia()