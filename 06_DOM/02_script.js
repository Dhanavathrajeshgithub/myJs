let mainBody = document.body; // returns the body element
mainBody.style.backgroundColor = "black";
let mainHeading = document.getElementById("heading"); // returnns first element with id 'heading'
mainHeading.style.color = "blue";

// HTMLCollection & Converting to Array

let listItems = document.getElementsByClassName("list-item"); // returns HTMLCollection of all elements with class 'list-item'
let listItemsArray = Array.from(listItems); // converting HTMLCollection to Array
listItemsArray.forEach((item) => {
  item.style.color = "yellow";
  item.style.fontSize = "20px";
});

let paragraphs = document.getElementsByTagName("p"); // returns HTMLCollection of all <p> elements
let paragraphsArray = Array.from(paragraphs);
paragraphsArray.forEach((p) => {
  p.style.color = "white";
  p.style.fontSize = "18px";
});

///   querySelector() ///
//   querySelectorAll()   -> returns NodeList has forEach()

let heading2 = document.querySelector(".heading"); // returns first element with class 'heading'
heading2.style.color = "green";

let listItemsQS = document.querySelectorAll(".list-item"); // returns NodeList of all elements with class 'list-item'
listItemsQS.forEach((item) => {
  item.style.backgroundColor = "grey";
  item.style.margin = "5px";
});

let paragraphsQS = document.querySelectorAll("p"); // returns NodeList of all <p> elements
paragraphsQS.forEach((p) => {
  p.style.textDecoration = "underline";
  p.style.fontStyle = "italic";
});
