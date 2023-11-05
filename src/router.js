function changePage() {
  console.log('changePage');
}

export async function route() {
  const routes = {
    '/': 'home.js',
    '/profile': 'profile.js',
    '/search': 'search.js',
    404: '404.js',
  };

  console.log('ROUTER');
  const path = location.pathname; //   /   /profile  /search
  const route = routes[path] || routes[404]; // home.js

  const { render } = await import(`@/pages/${route}`);
  document.body.innerHTML += render();
  // console.log(route);

  document.querySelector('#user').addEventListener('click', (e) => {
    e.preventDefault();
    changePage();
  });
}
