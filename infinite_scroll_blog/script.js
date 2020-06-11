const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

// Fetch posts from API
async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
}

// Show posts in DOM
async function showDom() {
  const posts = await getPosts();
  posts.forEach((item) => {
    const { id, title, body } = item;

    const newEl = document.createElement("div");
    newEl.classList.add("post");
    newEl.innerHTML = ` <div class="number">${id}</div>
        <div class="post-info">
          <h2 class="post-title">${title}</h2>
          <p class="post-body">
            ${body}
          </p>
        </div>`;

    postsContainer.appendChild(newEl);
  });
}
//show initial posts
showDom();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loading.classList.add("show");
    setTimeout(() => {
      showDom();
      loading.classList.remove("show");
    }, 1000);
  }
});
// filtering
function filterdata(e) {
  const val = filter.value.toUpperCase();
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const info = post.querySelector(".post-body").textContent.toUpperCase();
    if (title.indexOf(val) > -1 || info.indexOf(val) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}
filter.addEventListener("input", filterdata);
