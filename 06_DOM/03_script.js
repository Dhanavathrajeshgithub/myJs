let parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children); // HTMLCollection(4) [div.child, div.child, div.child, script]
// console.log(parent.children[0]); // <div class="child">Child 1</div>

for (let i = 0; i < parent.children.length; i++) {
  //console.log(parent.children[i].textContent);
}

let firstEle = parent.firstElementChild; // <div class="child">Child 1</div>
let lastEle = parent.lastElementChild; // <script src="./02_script.js"></script>
//console.log(firstEle);
//console.log(lastEle);

let secondChild = firstEle.nextElementSibling; // <div class="child">Child 2</div>
let parentOfFirst = firstEle.parentElement; // <div class="parent">...</div>
// console.log(secondChild);
// console.log(parentOfFirst);

console.log("Nodes: ", parent.childNodes); // NodeList(8) [text, div.child, text, div.child, text, div.child, text, script]

// Create new element
let newDiv = document.createElement("div");
newDiv.className = "child";
newDiv.id = "newId";
// newDiv.textContent = "child 4";  //
const addText = document.createTextNode("child 4");
newDiv.appendChild(addText); // // <div class="child" id="newId">child 4</div>
// Add style to the element
newDiv.style.backgroundColor = "yellow";
newDiv.style.padding = "10px";
newDiv.style.color = "red";
newDiv.style.fontSize = "20px";
// console.log(newDiv);
// Append the element to the DOM
parent.appendChild(newDiv);
newDiv.setAttribute("title", "newDivTitle");
