

/* Formas posibles para exportar datos */
export let nombre = 'pepe'; /* Primera forma de exportar */


const persona = {nombre: 'pepe'};
const doSomething = ()=>{
    console.log('algo');
};

export {persona} /* Segunda forma de exportar */

export default doSomething /* Tercera forma de exportar */