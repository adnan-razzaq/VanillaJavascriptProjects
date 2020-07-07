(function () {
  const btn = document.querySelectorAll(".filter-btn");
  btn.forEach((bt) => {
    bt.addEventListener("click", (e) => {
      e.preventDefault();
      const value = e.target.dataset.filter;

      const items = document.querySelectorAll(".store-item");
      items.forEach((item) => {
        if (value === "all") {
          item.style.display = "block";
        } else if (item.classList.contains(value)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
})();

/* search input */
(function () {
  const search = document.getElementById("search-item");
  search.addEventListener("keyup", () => {
    let value = search.value.toLowerCase().trim();
    const items = document.querySelectorAll(".store-item");
    items.forEach((item) => {
      let type = item.dataset.item;
      if (type.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
