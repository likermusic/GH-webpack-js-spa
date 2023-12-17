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
    404: "404.js",
  };

  const path = location.pathname; //   /   /profile  /search

  const page =
    (path.startsWith("/user/") && routes["/user/:login"]) ||
    routes[path] ||
    routes[404]; // home.js

  const { markup, actions } = await import(`./pages/${page}`);
  renderMarkup(document.body, "beforeend", markup, true);

  actions();

  // document.querySelector('.container').addEventListener('click', (e) => {
  //   if (e.target.matches('.btn')) {
  //     changePage();
  //   }
  // });
}
