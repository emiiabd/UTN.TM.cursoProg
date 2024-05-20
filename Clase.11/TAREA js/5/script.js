let temp = Number(prompt('Ingrese una temperatura en grados Celsius: '))
if (temp<0){
    console.log('Solido')
}else if(temp<=99){
    console.log('Liquido')
}else if(temp>=100){
    console.log('Gaseoso')
}else{
    alert('Temperatura no valida')
}