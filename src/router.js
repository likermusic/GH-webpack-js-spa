import loader from "./assets/loader/loader";
import { renderMarkup } from "./utils/render";

export function changePage(route, data = {}) {
  history.pushState(data, "", route);
  routing();
}

export async function routing() {
  const routes = {
    "/": "home.js",
    "/user/:login": "user.js",
    "/search": "search.js",
  };

  const path = location.pathname;

  const page =
    (path.startsWith("/user/") && routes["/user/:login"]) || routes[path];

  const { markup, actions } = await import(`./pages/${page}`);

  renderMarkup(document.body, "beforeend", markup, true);
  const loaderMarkup = `<div class="text-center loader">${loader}</div>`;
  renderMarkup(document.querySelector(".header"), "afterend", loaderMarkup);

  actions();
}
