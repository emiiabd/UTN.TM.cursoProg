
import { validateUsernameLength, validateUsernames, validatePasswords, validateEmptyCell } from "./validations";

export const ERRORS = {
  usernameErrorLength: { 
    text: 'El nombre de usuario tiene que tener mas de 4 caracteres', 
    id: 1, 
    validate: validateUsernameLength
  },
  userNotFound: { 
    text: 'Usuario o contraseña incorrecta', 
    id: 2
  },
  userExist: {
    text: 'El usuario ya existe',
    id: 3,
    validate: validateUsernames,
  },
  passwordError:{
    text: 'Las contraseñas no coinciden',
    id: 4,
    validate: validatePasswords
  },
  emptyCell:{
    text: 'Todos los campos son obligatorios',
    id: 5,
    validate: validateEmptyCell
  }
}