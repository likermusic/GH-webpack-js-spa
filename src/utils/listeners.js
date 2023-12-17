import { changePage } from "../router";
import { outputRepos, renderMarkup } from "./render";

export function listenersHome() {
  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".nick-name")) {
      e.preventDefault();
      changePage(e.target.pathname);
    }
  });
}

export function listenersUser(data) {
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

export function listenersSearch() {}

export function commonListeners() {
  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".btn-search")) {
      e.preventDefault();
      const searchValue = document.querySelector(".user-search").value;
      changePage(e.target.pathname, { searchValue: searchValue });
    }
  });
}
