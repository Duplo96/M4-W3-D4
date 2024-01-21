import { fetchData } from "./fetch.js";
const utenti = await fetchData();
const table = document.querySelector("#table-body");
const showName = document.querySelector("#name");
const showEmail = document.querySelector("#email");
const showUsername = document.querySelector("#username");
const ShowAll = document.querySelector("#show-all");
const searchBar = document.querySelector("#search-bar");
const display = document.querySelector("#display");
const displayUsers = () => {
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
const displayNames = () => {
  showName.addEventListener("click", () => {
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
const displayEmail = () => {
  showEmail.addEventListener("click", () => {
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
const displayUsername = () => {
  showUsername.addEventListener("click", () => {
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
const displayAll = () => {
  ShowAll.addEventListener("click", () => {
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

const search = (e) => {
  let counter = 1;
  const filterText = e.target.value.toLowerCase();
  table.innerHTML = "";
  utenti.forEach((utente) => {
    if (
      table.classList.contains(
        "showAll" &&
          (utente.name.toLowerCase().includes(filterText) ||
            utente.username.toLowerCase().includes(filterText) ||
            utente.email.toLowerCase().includes(filterText))
      )
    ) {
      table.innerHTML += `<tr>
      <th scope="row">${utente.id}</th>
      <td>${utente.name}</td>
      <td>${utente.username}</td>
      <td>${utente.email}</td>
    </tr>
`;
    }
    if (
      display.innerText.includes("Name") &&
      utente.name.toLowerCase().includes(filterText)
    ) {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${utente.name}</td>
      <td>${utente.username}</td>
      <td>${utente.email}</td>
    </tr>
`;

      counter++;
    } else if (
      display.innerText.includes("Username") &&
      utente.username.toLowerCase().includes(filterText)
    ) {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${utente.name}</td>
      <td>${utente.username}</td>
      <td>${utente.email}</td>
    </tr>
`;
      counter++;
    } else if (
      display.innerText.includes("E-mail") &&
      utente.email.toLowerCase().includes(filterText)
    ) {
      table.innerHTML += ` <th scope="row">${counter}</th>
        <td>${utente.name}</td>
      <td>${utente.username}</td>
      <td>${utente.email}</td>
    </tr>
`;
      counter++;
    }
  });
};
searchBar.addEventListener("keyup", function (e) {
  search(e);
});

displayUsers();
displayNames();
displayAll();
displayUsername();
displayEmail();
