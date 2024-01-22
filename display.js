const showName = document.querySelector("#name");
const showEmail = document.querySelector("#email");
const showUsername = document.querySelector("#username");
const ShowAll = document.querySelector("#show-all");
const searchBar = document.querySelector("#search-bar");
const table = document.querySelector("#table-body");
const resetTable = () => {
  table.innerHTML = "";
};
const setPlaceholderAndValue = (placeholder, value = "") => {
  searchBar.placeholder = placeholder;
  searchBar.value = value;
};
// Script for defaultPage
const displayUsers = (users, table) => {
  users.forEach(
    (user) =>
      (table.innerHTML += `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
      </tr>
  `)
  );
};
// Script for button names
const displayNames = (users, table) => {
  showName.addEventListener("click", () => {
    setPlaceholderAndValue("Search for Names");
    let counter = 1;
    resetTable();
    table.classList.remove("showAll");
    display.innerHTML = `<th scope="col">Name</th>`;
    users.forEach((user) => {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${user.name}</td>`;
      counter++;
    });
  });
};
// Script for button Email
const displayEmail = (users, table) => {
  showEmail.addEventListener("click", () => {
    setPlaceholderAndValue("Search for Email");
    let counter = 1;
    resetTable();
    table.classList.remove("showAll");
    display.innerHTML = `<th scope="col">E-mail</th>`;
    users.forEach((user) => {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${user.email}</td>`;
      counter++;
    });
  });
};
// Script for button Username
const displayUsername = (users, table) => {
  showUsername.addEventListener("click", () => {
    setPlaceholderAndValue("Search for Username");
    let counter = 1;
    resetTable();
    table.classList.remove("showAll");
    display.innerHTML = `<th scope="col">Username</th>`;
    users.forEach((user) => {
      table.innerHTML += ` <th scope="row">${counter}</th>
      <td>${user.username}</td>`;
      counter++;
    });
  });
};
// Script for button showAll
const displayAll = (users, table) => {
  ShowAll.addEventListener("click", () => {
    setPlaceholderAndValue("Search");
    table.classList.add("showAll");
    resetTable();
    display.innerHTML = `<th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">E-mail</th>`;
    users.forEach((user) => {
      table.innerHTML += `<tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
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
