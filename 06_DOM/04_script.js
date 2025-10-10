function addLang(lang) {
  const li = document.createElement("li");
  li.textContent = lang; // not optimal -> needs to traverse the DOM again
  document.querySelector(".languages").appendChild(li);
}
addLang("python");

function addOptiLang(lang) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lang)); // optimal
  document.querySelector(".languages").appendChild(li);
}
addOptiLang("C++");

// edit
let secondEle = document.querySelector("li:nth-child(2");
//secondEle.textContent = "Ruby"; // not optimal -> needs to traverse the DOM again
let newLi = document.createElement("li");
newLi.appendChild(document.createTextNode("Ruby")); // optimal
secondEle.replaceWith(newLi);

// remove
let lastLang = document.querySelector("li:last-child");
lastLang.remove(); // modern way
// lastLang.parentNode.removeChild(lastLang); // old way
