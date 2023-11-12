import layout from './layout';

export const markup = `${layout}<h1>PROFILE</h1>`;

const markup1 = `
<div class="container">
<div class="header py-4 row row-gap-2 justify-content-between">
  <div class="col col-xl-3 d-flex">
    <h5>ПОЛЬЗОВАТЕЛИ ГИТХАБА</h5>
    <span class="divider">&ensp;//&ensp;</span>
    <label class="name">defunct</label>
  </div>
  <div class="col-12 col-xl-4 d-flex">
    <input type="text" class="form-control me-2" placeholder="Поиск пользователя">
    <button class="btn">НАЙТИ</button>
  </div>
</div>

<div class="main row row-gap-4 justify-content-between py-5">
  <div class="row">
    <div class="col">
      <div class="user-profile d-flex align-items-center">
        <img class="rounded-circle" src="https://images-ext-1.discordapp.net/external/cs16EOg8RxWhOebviREafk0lbaG5pWlxe2Otz_0G5vw/https/loremflickr.com/cache/resized/65535_52587213378_618bddb4bc_320_240_nofilter.jpg?width=147&height=147" alt="">
        <div class="info ms-4">
          <div class="top">
              <label class="name">chris wanstrath</label>
              <label class="ms-1 nick-name">defunct</label>
          </div>
          <div class="bottom mt-2 mb-0 d-flex align-items-center">
              <p class="followers mb-0"><span>21.3k</span> подписчиков</p>
              <span class="mx-2">&#183;</span>
              <p class="followed mb-0"><span>210</span> подписок</p>
              <span class="mx-2">&#183;</span>
              <p class="address mb-0">http://site.ru/</p>
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
      <a href="">Все репозитории</a>
    </div>
  </div>

  <div class="row row-gap-3 repos justify-content-between">
     <div class="col-12 col-sm-6">
      <div class="card-repo p-3 border border-light rounded">
        <a href="" class="nick-name">octopus</a>
        <p class="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
     </div> 
     <div class="col-12 col-sm-6">
      <div class="card-repo p-3 border border-light rounded">
        <a href="" class="nick-name">octopus</a>
        <p class="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
     </div> 
     <div class="col-12 col-sm-6">
      <div class="card-repo p-3 border border-light rounded">
        <a href="" class="nick-name">octopus</a>
        <p class="mb-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, repudiandae consequuntur eos libero maiores sint delectus ratione ipsa possimus ad ipsum amet eveniet dolor eligendi distinctio nisi itaque molestiae optio.s </p>
      </div>
     </div> 
     <div class="col-12 col-sm-6">
      <div class="card-repo p-3 border border-light rounded">
        <a href="" class="nick-name">octopus</a>
        <p class="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
     </div> 
     <div class="col-12 col-sm-6">
      <div class="card-repo p-3 border border-light rounded">
        <a href="" class="nick-name">octopus</a>
        <p class="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
     </div> 
     <div class="col-12 col-sm-6">
      <div class="card-repo p-3 border border-light rounded">
        <a href="" class="nick-name">octopus</a>
        <p class="mb-0">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>
     </div> 
  </div>

</div>
</div>
`;
