import layout from "./layout";
import render from "../utils/render";
import { fetchUser } from "../utils/api";

export const markup = `${layout}`;

export async function actions() {
  let data;
  const splitUrl = location.pathname.split("/");
  const login = splitUrl[splitUrl.length - 1];

  if (localStorage.getItem("users")) {
    const users = JSON.parse(localStorage.getItem("users"));
    data = users.find((user) => user.login === login);
    const { deleteLoader } = await import("../utils/features");
    deleteLoader();
  } else {
    data = await fetchUser(login);
  }

  console.log(data);

  let output = `
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

  render(document.querySelector(".header"), "afterend", output);
  // document.querySelector(".loader").remove();

  // https://api.github.com/users/defunct
  // const users = JSON.parse(localStorage.getItem("users1")) || fetchUsers();
}

const markup1 = `



`;
