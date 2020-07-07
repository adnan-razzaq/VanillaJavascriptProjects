const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  const { key, keyCode, code } = e;
  insert.innerHTML = `<div class="key"><div class="keycode">${key}</div>
     <small>key </small></div>
       <div class="key"><div class="keycode">${keyCode}</div>
      <small>keyCode</small></div>
      <div class="key"><div class="keycode">${code}</div>
     <small>Code</small></div>`;
});
