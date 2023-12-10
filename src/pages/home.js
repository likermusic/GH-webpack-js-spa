import { changePage } from "../router";
import { fetchUsers } from "../utils/api";
import { renderUsers } from "../utils/render";
import layout from "./layout";

export const markup = layout;

/*
  let arr = [];
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((users) => {
      // `users` is an array of user objects
      const fetchPromises = users.map((user) => {
        const username = user.login;

        // Fetch repositories for each user
        return fetch(`https://api.github.com/users/${username}/repos`)
          .then((response) => response.json())
          .then((repositories) => {
            // `repositories` is an array of repository objects for the current user
            arr.push(repositories.length);
          })
          .catch((error) => {
            console.error(
              `Failed to fetch repositories for ${username}:`,
              error
            );
          });
      });

      // Wait for all fetch operations to complete
     
      return Promise.all(fetchPromises);
    })
    .then(() => {
      console.log(arr[0]);
    })
    .catch((error) => {
      console.error("Failed to fetch users:", error);
    });
*/

export async function actions() {
  // ------------------------

  // Работа с API
  //Закончить кэширование данных
  // const data =
  //   JSON.parse(localStorage.getItem("users")) || (await fetchUsers());

  let data;
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
    const { deleteLoader } = await import("../utils/features");
    deleteLoader();
  } else {
    data = await fetchUsers();
  }

  renderUsers(data);

  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".nick-name")) {
      e.preventDefault();
      changePage(e.target.pathname);
    }
  });
}
