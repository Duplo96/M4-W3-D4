const search = (e, table, utenti, display) => {
  const filterText = e.target.value.toLowerCase();
  table.innerHTML = "";
  let counter = 1;
  const isShowAll = table.classList.contains("showAll");
  let foundResults = false;
  utenti.forEach((utente) => {
    const nameMatch = utente.name.toLowerCase().includes(filterText);
    const usernameMatch = utente.username.toLowerCase().includes(filterText);
    const emailMatch = utente.email.toLowerCase().includes(filterText);
    const isNameDisplay =
      !isShowAll && nameMatch && display.innerText.includes("Name");
    const isUsernameDisplay =
      !isShowAll && usernameMatch && display.innerText.includes("Username");
    const isEmailDisplay =
      !isShowAll && emailMatch && display.innerText.includes("E-mail");
    if (isShowAll && (nameMatch || usernameMatch || emailMatch)) {
      table.innerHTML += `<tr>
        <th scope="row">${utente.id}</th>
        <td>${utente.name}</td>
        <td>${utente.username}</td>
        <td>${utente.email}</td>
      </tr>`;
      foundResults = true;
    } else if (isNameDisplay || isUsernameDisplay || isEmailDisplay) {
      table.innerHTML += ` <th scope="row">${counter}</th>
        <td>${
          isNameDisplay
            ? utente.name
            : isUsernameDisplay
            ? utente.username
            : utente.email
        }</td>
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
