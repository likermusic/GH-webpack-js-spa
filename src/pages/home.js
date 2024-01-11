import { getUsers } from "../utils/features";
import { commonListeners } from "../utils/listeners";
import { renderUsers } from "../utils/render";
import layout from "./layout";
export const markup = layout;

export async function actions() {
  const data = await getUsers();
  const { deleteLoader } = await import("../utils/features");
  deleteLoader();

  if (data && data.length > 0) {
    renderUsers(data);
    commonListeners();
    document.querySelector(".btn-back").remove();
  }
}
