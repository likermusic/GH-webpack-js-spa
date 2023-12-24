import { changePage } from "../router";
import { fetchUsers } from "../utils/api";
import { getUsers } from "../utils/features";
import { commonListeners, listenersHome } from "../utils/listeners";
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
  const data = await getUsers();
  const { deleteLoader } = await import("../utils/features");
  deleteLoader();

  if (data && data.length > 0) {
    renderUsers(data);
    listenersHome();
    commonListeners();
  }
}
