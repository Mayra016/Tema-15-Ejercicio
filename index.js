let nombre = "Máyra";
let apellido = "Zucaro";
const obj = { Name : nombre, Lastname: apellido };
console.log(obj);

sessionStorage.setItem("Persona", JSON.stringify(obj));
localStorage.setItem("Persona Local Storage", JSON.stringify(obj));
document.cookie = "CookieQueCaduca=" JSON.stringify(obj)"; max-age=2 * 60";
console.log(document.cookie);
