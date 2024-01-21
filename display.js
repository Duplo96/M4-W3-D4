const showName = document.querySelector("#name");
const showEmail = document.querySelector("#email");
const showUsername = document.querySelector("#username");
const ShowAll = document.querySelector("#show-all");
const searchBar = document.querySelector("#search-bar");
const displayUsers = (utenti, table) => {
  utenti.forEach(
    (utente) =>
      (table.innerHTML += `<tr>
        <th scope="row">${utente.id}</th>
        <td>${utente.name}</td>
        <td>${utente.username}</td>
        <td>${utente.email}</td>
      </tr>
  `)
  );
};
const displayNames = (utenti, table) => {
  showName.addEventListener("click", () => {
    searchBar.placeholder = "Search for Names";
    searchBar.value = "";
    let counter = 1;
    table.innerHTML = "";
    table.classList.remove("showAll");
    display.innerHTML = `<th scope="col">Name</th>`;
    utenti.forEach((utente) => {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${utente.name}</td>`;
      counter++;
    });
  });
};
const displayEmail = (utenti, table) => {
  showEmail.addEventListener("click", () => {
    searchBar.placeholder = "Search for E-mail";
    searchBar.value = "";
    let counter = 1;
    table.innerHTML = "";
    table.classList.remove("showAll");
    display.innerHTML = `<th scope="col">E-mail</th>`;
    utenti.forEach((utente) => {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${utente.email}</td>`;
      counter++;
    });
  });
};
const displayUsername = (utenti, table) => {
  showUsername.addEventListener("click", () => {
    searchBar.placeholder = "Search for Username";
    searchBar.value = "";
    let counter = 1;
    table.innerHTML = "";
    table.classList.remove("showAll");
    display.innerHTML = `<th scope="col">Username</th>`;
    utenti.forEach((utente) => {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${utente.username}</td>`;
      counter++;
    });
  });
};
const displayAll = (utenti, table) => {
  ShowAll.addEventListener("click", () => {
    searchBar.placeholder = "Search";
    searchBar.value = "";
    table.classList.add("showAll");
    table.innerHTML = "";
    display.innerHTML = `<th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">E-mail</th>`;
    utenti.forEach((utente) => {
      table.innerHTML += `<tr>
        <th scope="row">${utente.id}</th>
        <td>${utente.name}</td>
        <td>${utente.username}</td>
        <td>${utente.email}</td>
      </tr>
  `;
    });
  });
};

export {
  displayUsers,
  displayNames,
  displayEmail,
  displayUsername,
  displayAll,
};
