let ed = prompt('Ingrese su edad')
if (ed <= 0) {
    console.log('Edad no valida')
} else if (ed < 13){
    console.log('Eres un niño')
}else if (ed <=17){
    console.log('Eres un adolecente')
}else if (ed <=64){
    console.log('Eres un adulto')
}else if (ed >=65){
    console.log('Eres una persona mayor')
}

