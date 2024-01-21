const search = (e, table, utenti, display) => {
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
export { search };
