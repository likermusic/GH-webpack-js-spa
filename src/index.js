import "./styles/style.css";
import { changePage, routing } from "./router";

document.addEventListener("DOMContentLoaded", () => {
  routing();
});
window.addEventListener("popstate", (e) => {
  routing();
});
