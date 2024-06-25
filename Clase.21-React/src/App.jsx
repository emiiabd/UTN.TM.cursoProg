import React from "react";
import { nombre as name, persona as person } from "./funciones";
import { Button } from "./components/Boton";
import Carta from "./components/Carta";
import RowArticle from "./components/RowArticle";

/* Los archivos .jsx permiten la sintaxis JSX (html) */

/* function App(){
  return (
    <div>
      <h1>HOla</h1>
    </div>
  )
}; */

const App = ()=>{
  console.log(name)
  console.log(person)
  let nombreUsiario = 'Julieta'
  const obtenerRandom = () => 'Dato random'
  return ( /* En el return solo se debe colocar un componente padre, no se puede exportar dos componentes "padres" */
    <> {/* fragmentos (<></>) nos permite hacer una etiqueta padre que al instanciarse/invocarse se desecha
    , para no crear un div extra, esto no se lee en el html a la hora de exportarlo (Etiqueta de JSX) */}
      <div>
      <h1>Clase 21 React y Node.js</h1>
      <Button texto={'Boton 1'}/>
      <Carta />
      </div>
      <div>
      <h1>Hola {nombreUsiario} {1+1}{/* Todo lo que se escribe entre llaves, se ejecuta como logica de JavaScript (Esto se llama interpolacion) */}</h1>
      <h3>{obtenerRandom()}</h3>
      <Button texto={'Agregar a favoritos'} edad={'19'}/> {/* Esto se llama props, se le pasa un parametro a la funcion como un atributo */}
      <Carta />

      <RowArticle title={'Lift-off: The MDN Curriculum launch'} date={'4 months ago'} auth={'developer.mozilla.org'}/>
      <RowArticle title={"Baseline's evolution on MDN"} date={'7 months ago'} auth={'developer.mozilla.org'}/>
      <RowArticle title={'Introducing the MDN Playground: Bring your code to life!'} date={'a year ago'} auth={'developer.mozilla.org'}/>
      </div>
    </>
  )
};

/* 
Las funciones que retornan HTML/JSX se llamaran como Componentes, ej: componente App
Los componenetes por regla general es good practice declararlos con mayusculas en la primera letra

Nosotros podemos crear nuestros propios componentes
*/

/* const Button = ()=>{ Lo trasladamos al archivo ./components/Boton
  return(
    <button>Clickeame</button>
  )
} */

/* const Carta = ()=>{
  return(
    <div>Soy una carta</div>
  )
} */



export default App;
