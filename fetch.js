const utentiApi = "https://jsonplaceholder.typicode.com/users";
let utenti;

const fetchData = async () => {
  try {
    const response = await fetch(utentiApi);
    utenti = await response.json();
    return utenti;
  } catch (error) {
    console.error(error);
  }
};
export { fetchData };
