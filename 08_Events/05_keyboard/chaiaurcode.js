let div = document.querySelector("#insert");
let p = document;
window.addEventListener("keydown", (e) => {
  div.innerHTML = `
    ${e.key}   ${e.keyCode}   ${e.code}
  `;
});
