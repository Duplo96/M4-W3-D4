const usersApi = "https://jsonplaceholder.typicode.com/users";
let users;

const fetchData = async () => {
  try {
    const response = await fetch(usersApi);
    users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
  }
};
export { fetchData };
