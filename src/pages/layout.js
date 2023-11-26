import loader from "../assets/loader/loader";

export default `
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

  <div class="text-center loader">${loader}</div>
</div>  
`;
