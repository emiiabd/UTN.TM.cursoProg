/* let Edad = prompt('Ingrese su edad')
if (Edad <= 0) {
    console.log('Edad no valida')
} else if (Edad < 13){
    console.log('Eres un niño')
}else if (Edad <=17){
    console.log('Eres un adolecente')
}else if (Edad <=64){
    console.log('Eres un adulto')
}else if (Edad >=65){
    console.log('Eres una persona mayor')
} */

/* Utilizando funciones para mejorar el programa */

const edadUsuario = () =>{
    let Edad = prompt('Ingrese su edad')
    if (Edad <= 0) {
        Edad='Edad no valida'
    } else if (Edad < 13){
        Edad='Eres un niño'
    }else if (Edad <=17){
        Edad='Eres un adolecente'
    }else if (Edad <=64){
        Edad='Eres un adulto'
    }else if (Edad >=65){
        Edad='Eres una persona mayor'
    }
return alert(Edad)
}

edadUsuario()
