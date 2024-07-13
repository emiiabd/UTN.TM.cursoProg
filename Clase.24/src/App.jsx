import React,{ useState } from 'react';
import Counter from './components/Counter/Counter';
import FormCards from './components/formCards/formCards';

function App() {
/* 
  Reglas de oro:
  UN ESTADO ES INMUTABLE

- Si queremos modificcar el valor de un estado debemos hacerlo con la funcion Setter
- Si uso la funcion Setter el componente donde se creo el estado se re-renderiza

  useState es  una funcion que nos permite crear el estado de nuestra aplicacion y nos trae un array con dos valores
  Estructura: const [valor, fnParaCabiarElValor] = useState();
*/

/* 
4) Crear un componente llamado Counter que recibira una prop llamada limit,
El limit sera el numero limite que tendra el contador
*/



  return (
  <>
    <Counter limitUp={15}/>
    <FormCards/>
  </>
  );
};

export default App;
