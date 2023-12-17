import layout from "./layout";
import { outputRepos, renderMarkup, renderUser } from "../utils/render";
import { fetchUser, fetchUsers } from "../utils/api";
import { commonListeners, listenersUser } from "../utils/listeners";

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

  if (data) {
    // добавить условие на массив
    renderUser(data);
    commonListeners();
    listenersUser(data);
  }
}
