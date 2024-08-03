import { DATA } from "../Data/data";
import {v4 as uuid} from 'uuid';
import { userData } from "../Data/userData";

const guardarUsuariosEnLocal = (obj) => localStorage.setItem('userData', JSON.stringify(obj))
const guardarDatosEnLocal= (obj) => localStorage.setItem('DATA', JSON.stringify(obj))

export const getDatosEnLocal = () =>{
  const data = JSON.parse(localStorage.getItem('DATA')) ||  (guardarDatosEnLocal(DATA), DATA);
  return data
}

export const getUsuariosEnLocal = () =>{
  const users = JSON.parse(localStorage.getItem('userData')) ||  (guardarUsuariosEnLocal(userData), userData);
  return users
}

/* const addUsuarioEnLocal = (obj) => localStorage.setItem('userData', JSON.stringify([...getUsuariosEnLocal(), obj])) */
const dataMookShadow = (user) => getDatosEnLocal().filter((i) => !(i.userId === user.userId))

export const generarWorkSpace = (user) => {

  const dataMook = dataMookShadow(user)
  const { username, userId, userMemory } = user
  
  const newWorkSpace ={
    username: username,
    userId,
    userMemory,
    }

    dataMook.push(newWorkSpace)
    guardarDatosEnLocal(dataMook)
}

export const generateGeneralChannel = () => generateNewChannel('general')

export const generateNewChannel = (name) => ({name: name,
  id: uuid(),
  thumbnail: '',
  messages: [
    ]
})

export const setLocalUser = (obj) => localStorage.setItem('user', JSON.stringify(obj))

export const getLocalUser = () =>{
  const user = JSON.parse(localStorage.getItem('user'));
  if(!user) return {}
  return user
}

export const getUserById = (id) => {
  const dataMook = getDatosEnLocal();
  return (dataMook.find((i) => i.userId == id))
}

export const getUserID = () => { 
  const userInfo = getLocalUser();
  return userInfo.userId
}

export const registerNewUser = (username, password) => {
  const randomId = uuid()
  const user = {
    username,
    password,
    role: 'user',
    userId: randomId,
    userMemory: []
  }
  guardarUsuariosEnLocal([...getUsuariosEnLocal(), user]);
  generarWorkSpace(user)

}

export const getWorkSpaceInfo = (userId, workSpaceID) =>  getUserById(userId).userMemory.find((i) => Number(i.workSpaceID) === Number(workSpaceID))

export const getChannels = (userId, workSpaceID) => getWorkSpaceInfo(userId, workSpaceID).channels

