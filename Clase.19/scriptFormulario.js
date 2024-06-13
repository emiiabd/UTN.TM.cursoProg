const formularioHTMl =  document.getElementById('form-login')


const handleLogin = (evento)=>{
  evento.preventDefault()
  console.log('formulario enviado')
  console.log(formularioHTMl.password.value)
  console.log(formularioHTMl.username.value)
  }

//                          se coloca handle a todas las funciones asociadas a eventos
/* formularioHTMl.onsubmit= handleLogin() */
formularioHTMl.addEventListener('submit', handleLogin)

