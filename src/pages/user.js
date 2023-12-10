import layout from "./layout";
import { outputRepos, renderMarkup, renderUser } from "../utils/render";
import { fetchUser, fetchUsers } from "../utils/api";

export const markup = layout;

export async function actions() {
  let data;
  const splitUrl = location.pathname.split("/");
  const login = splitUrl[splitUrl.length - 1];

  const { deleteLoader } = await import("../utils/features");

  if (localStorage.getItem("users")) {
    const users = JSON.parse(localStorage.getItem("users"));
    data = users.find((user) => user.login === login);
    deleteLoader();
  } else {
    data = await fetchUser(login);
    deleteLoader();
  }

  renderUser(data);

  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".all-repos")) {
      e.preventDefault();
      const output = outputRepos(
        data.reposArray,
        6,
        data.reposArray.length - 1
      );
      renderMarkup(document.querySelector(".repos"), "beforeend", output);
    }
  });
}

const markup1 = `
`;
