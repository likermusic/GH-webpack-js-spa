import { getUsers } from "./features";

export function renderMarkup(source, position, markup, clear = false) {
  if (clear) {
    // eslint-disable-next-line
    document.body.innerHTML = "";
  }

  source.insertAdjacentHTML(position, markup);
}

export function renderUsers(data) {
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
  renderMarkup(document.querySelector(".header"), "afterend", output);
}

export function renderUser(data) {
  let output = `
  <div class="main row row-gap-4 justify-content-between py-5">
  <div class="row">
    <div class="col">
      <div class="user-profile d-flex align-items-center">
        <img class="rounded-circle w-25" src="${data.avatar_url}" alt="">
        <div class="info ms-4">
          <div class="top">
              <label class="name">${data.login}</label>
          </div>
          <div class="bottom mt-2 mb-0 d-flex align-items-center">
              <p class="followers mb-0"><span>${data.followers.length}</span> подписчиков</p>
              <span class="mx-2">&#183;</span>
              <p class="followed mb-0"><span>${data.following.length}</span> подписок</p>
              <span class="mx-2">&#183;</span>
              <p class="address mb-0">
                <a href="${data.html_url}">${data.html_url}</a>
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-5 mb-3 desc justify-content-between">
    <div class="col">
      <h5 class="">репозитории</h5>
    </div>
    <div class="col text-end">
      <a class="all-repos" href="">Все репозитории</a>
    </div>
  </div>

  <div class="row row-gap-3 repos justify-content-between">
`;

  output += outputRepos(data.reposArray, 0, 5);

  output += ` </div>
  </div>
  </div>
    `;

  renderMarkup(document.querySelector(".header"), "afterend", output);
}

export function outputRepos(repos, start, end) {
  let output = "";
  for (let index = start; index <= end; index++) {
    output += `<div class="col-12 col-sm-6">
    <div class="card-repo p-3 border border-light rounded">
      <a href="${repos[index].url}" class="nick-name">${repos[index].name}</a>
      <p class="mb-0">${repos[index].description}</p>
    </div>
   </div> `;
  }
  return output;
}

export async function renderSearch(searchValue) {
  const users = await getUsers();
  if (!users) {
    return null;
  }
  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (filteredUsers.length === 0) {
    return null;
  }

  let output = "";
  output += `
  <div class="title mt-2 h1 text-uppercase">пользователи по запросу: <span>${searchValue}</span></div>
  <div class="main row row-gap-4 column-gap-1 justify-content-between py-5">
  `;

  filteredUsers.forEach((user) => {
    output += `<div class="col-xl-3 col-md-5">
    <div class="card-item d-flex align-items-center">
      <img class="rounded-circle w-25" src="${user.avatar_url}" alt="">
      <div class="info ms-2">
        <div class="top">
          <a class="nick-name" href="">${user.login}</a>
          <label class="repos"><span>${user.repos}</span> репозиториев</label>
        </div>
        <p class="bottom org-name mb-0">
          ${user.organizations_url}
        </p>
      </div>
    </div>
  </div>`;
  });

  output += `</div>
  </div>
  `;

  renderMarkup(document.querySelector(".header"), "afterend", output);

  return true;
}
