const key = "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";

export function fetchUsers() {
  const promise = fetch("https://api.github.com/users", {
    method: "GET",
    headers: {
      Authorization: key,
    },
  })
    .then(function (resp) {
      if (resp.ok == false) {
        throw new Error();
      }
      return resp.json();
    })
    .then(async function (data) {
      data = await fetchRepos(data);
      return data;
      // Actions
    })
    .catch(function (error) {
      // const msg =
      //   "<p class='text-danger'>Произошла ошибка при получении данных</p>";
      // render(document.querySelector(".header"), "afterend", msg);
      alert(error);
    })
    .finally(async function () {
      const { deleteLoader } = await import("./features");
      deleteLoader();
    });

  function fetchRepos(users) {
    const promises = users.map((user, ind) => {
      return Promise.all([
        fetch(`https://api.github.com/users/${user.login}/repos`, {
          method: "GET",
          headers: {
            Authorization: key,
          },
        }),

        fetch(`https://api.github.com/users/${user.login}/followers`, {
          method: "GET",
          headers: {
            Authorization: key,
          },
        }),

        fetch(`https://api.github.com/users/${user.login}/following`, {
          method: "GET",
          headers: {
            Authorization: key,
          },
        }),
      ])
        .then(([responseRepos, responseFollowers, responseFollowing]) => {
          return Promise.all([
            responseRepos.json(),
            responseFollowers.json(),
            responseFollowing.json(),
          ]);
        })

        .then(([repositories, followers, following]) => {
          users[ind].repos = repositories.length; // 30
          const reposArr = [];
          repositories.forEach((repo) => {
            reposArr.push({ name: repo.name, description: repo.description });
          });
          users[ind].reposArray = reposArr;

          users[ind].followers = followers;

          users[ind].following = following;
        });
    });

    return Promise.all(promises).then(() => users);
  }

  return promise.then((data) => {
    localStorage.setItem("users", JSON.stringify(data));
    return data;
  });
}

export function fetchUser(login) {
  return fetch(`https://api.github.com/users/${login}`, {
    method: "GET",
    headers: {
      Authorization: key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

/*

  function fetchRepos(users) {
    const promises = users.map((user, ind) => {

      return fetch(`https://api.github.com/users/${user.login}/repos`, {
        method: "GET",
        headers: {
          Authorization: key,
        },
      })
        .then((response) => response.json())
        .then((repositories) => {
          users[ind].repos = repositories.length; // 30
          const reposArr = [];
          repositories.forEach((repo) => {
            reposArr.push({ name: repo.name, description: repo.description });
          });
          users[ind].reposArray = reposArr;
        });
        
    });

    return Promise.all(promises).then(() => users);
  }

*/
