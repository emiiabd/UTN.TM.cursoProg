import { userData } from "./userData";

export const validateUsernameLength = (value) => value.length > 3;

export const validatePasswords = (psw) => String(psw) === String(document.getElementById('psw2').value)

export const validateUsernames = (username) =>  userData.includes((user) => user.username === username);

export const validateEmptyCell = (value) => value !== '';
