let nombre = "Máyra";
let apellido = "Zucaro";
const obj = { Name : nombre, Lastname: apellido };
console.log(obj);

sessionStorage.setItem("Persona", JSON.stringify(obj));
localStorage.setItem("Persona Local Storage", JSON.stringify(obj));
const now = new Date();
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`;
