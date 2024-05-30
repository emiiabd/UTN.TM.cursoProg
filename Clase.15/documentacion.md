### Calculadora

## Funcionalidades

-login
 -Solicitar email
 -Solicitar paswsword

-calcular operaciones
  - +
  - -

- HIstorial
  - Agregar al historial
  - Mostrar historial/renderizar historial

## utilidades

-Validaciones
  - numero
  - password
  - email
  - operaciones Calculadores

## Reglas

Los ej se pueden resolver de diferentes formas
Si crees necesario usar funciones, las podes usar
Cumplir con el principio DRY, KISS

ESTO ESTA MAL:

function a(str){
  return abc-z
}

let v = '1.1.1'

## Login

Debo tener una funcion que active toda la logica del login:

Solicitar email
Validar // Se utilizauna expresion regular
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(stringAValidar)

Ejemplo de uso
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test('pepe@gmail.com')

Solicitar password
Validar que tenga mas de 6 caracteres, alguna mayuscula y que no sea '' o null

Si todo esta correcto, dira por alerta('Usuario {email} registrado con exito') y retornara al usario como objeto
Ej:
Login(){
  email: 'value@gmail.com'
  password: 'Pepe123'
}

## Calculadora de operaciones
crear una funcion llamada calculadora() que de inicio a la siguiente logica
-calcular operaciones
  - +
  - -

Solicitar una operacion y verificar que la operacion sea valida (es valida si esra dentro de las operaciones disponibles)
solicitar un numero y validar
solicitar otro numero y validar

Al terminar la funcion se mostrara:
'El resulttado de {numero1} {operacion} {numero2} es {resultado}'