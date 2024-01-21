const search = (e, table, utenti, display) => {
  let counter = 1;
  let filterText = e.target.value.toLowerCase();
  let foundResults = false; // Aggiunto per tenere traccia se sono stati trovati risultati
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
      </tr>`;
      foundResults = true;
    }

    if (
      display.innerText.includes("Name") &&
      utente.name.toLowerCase().includes(filterText)
    ) {
      table.innerHTML += ` <th scope="row">${counter}</th>
        <td>${utente.name}</td>
        <td>${utente.username}</td>
        <td>${utente.email}</td>
      </tr>`;
      counter++;
      foundResults = true;
    } else if (
      display.innerText.includes("Username") &&
      utente.username.toLowerCase().includes(filterText)
    ) {
      table.innerHTML += ` <th scope="row">${counter}</th>
        <td>${utente.name}</td>
        <td>${utente.username}</td>
        <td>${utente.email}</td>
      </tr>`;
      counter++;
      foundResults = true;
    } else if (
      display.innerText.includes("E-mail") &&
      utente.email.toLowerCase().includes(filterText)
    ) {
      table.innerHTML += ` <th scope="row">${counter}</th>
        <td>${utente.name}</td>
        <td>${utente.username}</td>
        <td>${utente.email}</td>
      </tr>`;
      counter++;
      foundResults = true;
    }
  });

  if (!foundResults) {
    table.innerHTML = `
    <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">No result found</th>
      <th scope="col"></th>`;
  }
};

export { search };
