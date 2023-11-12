import layout from './layout';

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

<div class="title mt-2 h1 text-uppercase">пользователи по запросу <span>defunct</span></div>

<div class="main row row-gap-4 column-gap-1 justify-content-between py-5">
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
