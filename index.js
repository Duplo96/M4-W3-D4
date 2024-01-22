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
    const users = await fetchData();
    const table = document.querySelector("#table-body");
    const searchBar = document.querySelector("#search-bar");
    const display = document.querySelector("#display");
    searchBar.addEventListener("keyup", (e) => {
      search(e, table, users, display);
    });

    displayUsers(users, table);
    displayNames(users, table);
    displayAll(users, table);
    displayUsername(users, table);
    displayEmail(users, table);
  } catch (error) {
    console.error("Errore nel recupero dei dati:", error);
  }
});
