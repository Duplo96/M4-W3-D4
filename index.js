import { fetchData } from "./fetch.js";
import { search } from "./search.js";
import {
  displayUsers,
  displayNames,
  displayEmail,
  displayUsername,
  displayAll,
} from "./display.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const utenti = await fetchData();
    const table = document.querySelector("#table-body");
    const searchBar = document.querySelector("#search-bar");
    const display = document.querySelector("#display");

    searchBar.addEventListener("keyup", (e) => {
      search(e, table, utenti, display);
    });

    displayUsers(utenti, table);
    displayNames(utenti, table);
    displayAll(utenti, table);
    displayUsername(utenti, table);
    displayEmail(utenti, table);
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
  }
});
