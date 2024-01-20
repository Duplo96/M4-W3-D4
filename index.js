import { fetchData } from "./fetch.js";
const utenti = await fetchData();
const ul = document.querySelector(".ul");
const displayUsers = () => {
  utenti.forEach(
    (utente) =>
      (ul.innerHTML += `
  <li id= "user-${utente.id}"> <b>Name</b>: ${utente.name}; <br>
  <b> Username</b>: ${utente.username}; <br>
  <b>Email</b>: ${utente.email}; <br> 
  <b>Phone number</b>: ${utente.phone}.  
  </li>
`)
  );
};
displayUsers();
