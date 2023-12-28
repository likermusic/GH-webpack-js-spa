import loader from "../assets/loader/loader";

export default `
<div class="container">
  <div class="header py-4 row row-gap-2 justify-content-between">
    <div class="col col-xl-3 d-flex">
      <h5>
        <a class="logo" href="/">ПОЛЬЗОВАТЕЛИ ГИТХАБА</a>
      </h5>
      <span class="divider"></span>
      <label class="name"></label>
    </div>
    <div class="col-12 col-xl-4 d-flex">
      <input type="text" class="user-search form-control me-2" placeholder="Поиск пользователя">
      <a href="/search" class="btn btn-search">НАЙТИ</a>
    </div>
    <div class="row">
      <a class="col-1 btn btn-sm btn-back ms-3 mt-3" href="">&lt;&lt;Назад</a>
    </div>
  </div>

  <!-- <div class="text-center loader">${loader}</div> -->
</div>  
`;
