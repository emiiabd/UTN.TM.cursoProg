/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
  }),
  headers: {
      'Content-type': 'application/json; charset=UTF-8',
  },
})



Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active el evento submit

Cuando se envie el formulario se debera capturar titulo y body y se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'

const handleSubmit = async ( event ) =>{
  event.preventDefault()

}
formHTML.addEventListenner('submit',  handleSubmit) */

const formHTML = document.getElementById("formHTML");


const handleSubmit = async (event) =>{
  event.preventDefault();

  const titleHTML = document.getElementById("titleForm").value;
  const bodyHTML = document.getElementById("bodyForm").value;

  const formData = {
    title: `${titleHTML}`,
    body: `${bodyHTML}`,
    userId: 1,
  };

  const sendData = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({formData}),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const data = await sendData.json();
  console.log("Formulario enviado\n", data);
};

formHTML.addEventListener('submit', handleSubmit);
