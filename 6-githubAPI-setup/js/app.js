class GITHUB {
  constructor() {
    this.clientid = "f83f48594a24252438d0";
    this.ClientSecret = "26d84c7e20ddb746e8c1581381462f860b40c3bc";
    this.base = "https://api.github.com/users/";
  }

  async ajaxUser(value) {
    //userurl
    const userurl = `${this.base}${value}?client_id='${this.clientid}'&client_secret'${this.ClientSecret}'`;

    //repos url
    const reposurl = `${this.base}${value}/repos?client_id='${this.clientidd}'&client_secret='${this.ClientSecret}'`;
    //get users
    const userdata = await fetch(userurl);
    const user = await userdata.json();

    //get repos
    const reposData = await fetch(reposurl);

    const repos = await reposData.json();
    return {
      user,
      repos,
    };
  }
}

class UI {
  constructor() {}
  showFeedback(text) {
    const feedback = document.querySelector(".feedback");
    feedback.classList.add("showItem");
    feedback.innerHTML = `<p>${text}</p>`;
    setTimeout(() => {
      feedback.classList.remove("showItem");
    }, 3000);
  }

  //display user
  displayuser(img, link, repos, name, login) {
    const userlist = document.getElementById("github-users");
    const div = document.createElement("div");
    div.classList.add("row", "single-user", "my-3");
    div.innerHTML = `<div class=" col-sm-6 col-md-4 user-photo my-2">
       <img src="${img}" class="img-fluid" alt="">
      </div>
      <div class="col-sm-6 col-md-4 user-info text-capitalize my-2">
       <h6>name : <span>${name}</span></h6>
       <h6>github : <a href="${link}" class="badge badge-primary">link</a> </h6>
       <h6>public repos : <span class="badge badge-success">${repos}</span> </h6>
      </div>
      <div class=" col-sm-6 col-md-4 user-repos my-2">
       <button type="button" data-id=${login} id="getRepos" class="btn reposBtn text-capitalize mt-3">
        get repos
       </button>
      </div>`;
    userlist.appendChild(div);
  }

  // get user
  getUser(data) {
    const {
      avatar_url: img,
      html_url: link,
      public_repos: repos,
      name,
      login,
      message,
    } = data;
    if (message === "Not found") {
      this.showFeedback("No such user exists");
    } else {
      this.displayuser(img, link, repos, name, login);

      const searchUser = document.getElementById("searchUser");
      searchUser.value = "";
    }
  }
}

(function () {
  const github = new GITHUB();
  const ui = new UI();

  const searchForm = document.getElementById("searchForm");
  const searchUser = document.getElementById("searchUser");
  const userList = document.getElementById("github-users");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const textValue = searchUser.value;

    if (textValue === "") {
      ui.showFeedback("Please enter a value");
    } else {
      github
        .ajaxUser(textValue)
        .then((data) => ui.getUser(data.user))
        .catch((error) => console.log(error));
    }
  });

  userList.addEventListener("click", (e) => {
    if (e.target.classList.contains("reposBtn")) {
      const userid = event.target.dataset.id;
      github.ajaxUser(userid).then((data) => console.log(data));
    }
  });
})();
