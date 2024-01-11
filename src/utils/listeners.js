import { changePage } from "../router";
import { outputRepos, renderMarkup } from "./render";

export function listenersUser(data) {
  let isClicked = false;
  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".all-repos")) {
      e.preventDefault();
      if (!isClicked) {
        const output = outputRepos(
          data.reposArray,
          6,
          data.reposArray.length - 1
        );
        renderMarkup(document.querySelector(".repos"), "beforeend", output);
        isClicked = true;
      }
    }
  });
}

export function commonListeners() {
  function btnsClickHandler(e, isEnter = false) {
    if (e.target.matches(".btn-search") || isEnter) {
      e.preventDefault();
      let uri = "/search";
      const searchValue = document.querySelector(".user-search").value;
      changePage(uri, { searchValue: searchValue });
    }
    if (e.target.matches(".logo")) {
      e.preventDefault();
      changePage(e.target.pathname);
    }
    if (e.target.matches(".btn-back")) {
      history.back();
    }
  }

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      btnsClickHandler(e, true);
    }
  });

  document
    .querySelector(".container")
    .addEventListener("click", btnsClickHandler.bind());

  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".nick-name")) {
      e.preventDefault();
      changePage(e.target.pathname);
    }
  });
}
