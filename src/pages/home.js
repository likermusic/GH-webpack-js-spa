import { changePage } from "../router";
import render from "../utils/render";
import layout from "./layout";

export const markup = layout;

export function actions() {
  // Работа с API
  //Закончить кэширование данных

  fetch("https://api.github.com/users", {
    method: "GET",
    headers: {
      Authorization: "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",
    },
  })
    .then(function (resp) {
      if (resp.ok == false) {
        throw new Error();
      }
      return resp.json();
    })
    .then(function (data) {
      fetchRepos(data);

      localStorage.setItem("users", JSON.stringify(data));

      // console.log(arr);
      // console.log(data[0].repos);

      let output = `<div class="main row row-gap-4 column-gap-1 justify-content-between py-5">`;
      data.forEach((user) => {
        output += `<div class="col-xl-3 col-md-5">
          <div class="card-item d-flex align-items-center">
            <img class="rounded-circle w-25" src="${user.avatar_url}" alt="">
            <div class="info ms-2">
              <div class="top">
                <a class="nick-name" href="/user/${user.login}" id="user">${user.login}</a>
                <label class="repos"><span>${user.repos}</span> репозиториев</label>
              </div>
              <p class="bottom org-name mb-0">
                ${user.organizations_url} 
              </p>
            </div>
          </div>
        </div>`;
      });
      output += `</div>`;
      render(document.querySelector(".header"), "afterend", output);
    })
    .catch(function (error) {
      const msg =
        "<p class='text-danger'>Произошла ошибка при получении данных</p>";
      render(document.querySelector(".header"), "afterend", msg);
    })
    .finally(function () {
      document.querySelector(".loader").remove();
    });

  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.matches(".nick-name")) {
      e.preventDefault();
      changePage(e.target.pathname);
    }
  });
}

function fetchRepos(data) {
  let arr = [];
  data.forEach((user) => {
    fetch(`https://api.github.com/users/${user.login}/repos`, {
      method: "GET",
      headers: {
        Authorization: "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",
      },
    })
      .then(function (resp) {
        if (resp.ok == false) {
          throw new Error();
        }
        return resp.json();
      })
      .then(function (data) {
        // user.repos = data.length;
        arr.push(data.length);
      });
  });
  // console.log(arr);
  // return data;
  return arr;
}

const markup1 = `
<div class="container">
<div class="header py-4 row row-gap-2 justify-content-between">
  <div class="col col-xl-3 d-flex">
    <h5>ПОЛЬЗОВАТЕЛИ ГИТХАБА</h5>
    <span class="divider"></span>
    <label class="name"></label>
  </div>
  <div class="col-12 col-xl-4 d-flex">
    <input type="text" class="form-control me-2" placeholder="Поиск пользователя">
    <button class="btn">НАЙТИ</button>
  </div>
</div>

<div class="main row row-gap-4 column-gap-1 justify-content-between py-5">
  <div class="col-xl-3 col-md-5">
    <div class="card-item d-flex align-items-center">
      <img class="rounded-circle" src="https://images-ext-1.discordapp.net/external/cs16EOg8RxWhOebviREafk0lbaG5pWlxe2Otz_0G5vw/https/loremflickr.com/cache/resized/65535_52587213378_618bddb4bc_320_240_nofilter.jpg?width=64&height=64" alt="">
      <div class="info ms-2">
        <div class="top">
          <a class="nick-name" href="" id="user">defunkt</a>
          <label class="repos"><span>15</span> репозиториев</label>
        </div>
        <p class="bottom org-name mb-0">
          Название организации
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-5">
    <div class="card-item d-flex align-items-center">
      <img class="rounded-circle" src="https://images-ext-1.discordapp.net/external/cs16EOg8RxWhOebviREafk0lbaG5pWlxe2Otz_0G5vw/https/loremflickr.com/cache/resized/65535_52587213378_618bddb4bc_320_240_nofilter.jpg?width=64&height=64" alt="">
      <div class="info ms-2">
        <div class="top">
          <a class="nick-name" href="">defunkt</a>
          <label class="repos"><span>15</span> репозиториев</label>
        </div>
        <p class="bottom org-name mb-0">
          Название организации
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-5">
    <div class="card-item d-flex align-items-center">
      <img class="rounded-circle" src="https://images-ext-1.discordapp.net/external/cs16EOg8RxWhOebviREafk0lbaG5pWlxe2Otz_0G5vw/https/loremflickr.com/cache/resized/65535_52587213378_618bddb4bc_320_240_nofilter.jpg?width=64&height=64" alt="">
      <div class="info ms-2">
        <div class="top">
          <a class="nick-name" href="">defunkt</a>
          <label class="repos"><span>15</span> репозиториев</label>
        </div>
        <p class="bottom org-name mb-0">
          Название организации
        </p>
      </div>
    </div>
  </div>
  <div class="col-xl-3 col-md-5">
    <div class="card-item d-flex align-items-center">
      <img class="rounded-circle" src="https://images-ext-1.discordapp.net/external/cs16EOg8RxWhOebviREafk0lbaG5pWlxe2Otz_0G5vw/https/loremflickr.com/cache/resized/65535_52587213378_618bddb4bc_320_240_nofilter.jpg?width=64&height=64" alt="">
      <div class="info ms-2">
        <div class="top">
          <a class="nick-name" href="">defunkt</a>
          <label class="repos"><span>15</span> репозиториев</label>
        </div>
        <p class="bottom org-name mb-0">
          Название организации
        </p>
      </div>
    </div>
  </div>
</div>
</div>
`;

// export function render() {
//   return markup;
// }
