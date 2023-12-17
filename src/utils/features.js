import { fetchUsers } from "./api";

export function deleteLoader() {
  document.querySelector(".loader").remove();
}

export async function getUsers() {
  let data;
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
    if (!Array.isArray(data)) {
      data = await fetchUsers();
    }
    const { deleteLoader } = await import("../utils/features");
    deleteLoader();
  } else {
    data = await fetchUsers();
  }
  return data;
}
