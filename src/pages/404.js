import layout from "./layout";

export const markup = layout;

const markup1 = `
  <div class="container">
  <div class="header py-4 row row-gap-2 justify-content-between">
    <div class="col col-xl-3 d-flex">
      <h5>ПОЛЬЗОВАТЕЛИ ГИТХАБА</h5>
      <span class="divider">&ensp;//&ensp;</span>
      <label class="name">поиск</label>
    </div>
    <div class="col-12 col-xl-4 d-flex">
      <input type="text" class="form-control me-2" placeholder="Поиск пользователя">
      <button class="btn">НАЙТИ</button>
    </div>
  </div>

  <div class="title mt-2 h1 text-uppercase">ничего не найдено по запросу <span>defunct</span></div>

  </div>
`;
