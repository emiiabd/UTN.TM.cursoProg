/* let range = prompt('Por favor introduzca un numero entre 0 y 100')

if(range<0 || range>100){
    console.log('Calificacion no valida')
}else if(range<=59){
    console.log('F')
}else if(range<=69){
    console.log('D')
}else if(range<=79){
    console.log('C')
}else if(range<=89){
    console.log('B')
}else if(range<=100){
    console.log('A')
} */

/* creando una funcion para mejorar el programa */

const Calificacion = () =>{
    let range = prompt('Por favor introduzca un numero entre 0 y 100')
    if(range<0 || range>100){
        return alert('Calificacion no valida')
    }else if(range<=59){
        range='F'
    }else if(range<=69){
        range='D'
    }else if(range<=79){
        range='C'
    }else if(range<=89){
        range='B'
    }else if(range<=100){
        range='A'
    }
    return alert(range)
}

Calificacion()