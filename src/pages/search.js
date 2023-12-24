import { deleteLoader } from "../utils/features";
import { commonListeners } from "../utils/listeners";
import { renderMarkup, renderSearch } from "../utils/render";
import layout from "./layout";
import loader from "../assets/loader/loader";

export const markup = layout;

export async function actions() {
  const searchValue = history.state.searchValue;
  const areUsers = await renderSearch(searchValue);
  commonListeners();
  deleteLoader();

  if (!areUsers) {
    const msg = `<div class="title mt-2 h1 text-uppercase">ничего не найдено по запросу: <span>${searchValue}</span></div>`;
    renderMarkup(document.querySelector(".header"), "afterend", msg);
  }
}
