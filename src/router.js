import render from './utils/render';

function changePage() {
  // console.log(history);
  history.pushState({}, '', '/user/defunkt');
  routing();
}

export async function routing() {
  const routes = {
    '/': 'home.js',
    '/user/:login': 'user.js',
    '/search': 'search.js',
    404: '404.js',
  };

  const path = location.pathname; //   /   /profile  /search

  const page =
    (path.startsWith('/user/') && routes['/user/:login']) ||
    routes[path] ||
    routes[404]; // home.js

  const { markup } = await import(`./pages/${page}`);
  render(document.body, 'beforeend', markup, true);

  document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
      changePage();
    }

    //   e.preventDefault();
    //   changePage();
  });
}
