// ++++++  THIS   +++++++++
let userName = "Rajesh";
const user = {
  Name: "Rajesh",
  price: 2000,
  welcomeMsg: function () {
    console.log(`${this.Name}, welcome to our website!`);
    console.log(this); // this refers to object which is calling the method -> user object here
  },
};

//console.log(this); // this referes to global object -> {} empty in node.js , refers to window object in browser
//user.welcomeMsg();

function chai() {
  let userName = "Dhan";
  //console.log(this); // inside function also this referes to global object -> {} empty in node.js , refers to window object in browser
  console.log(this.userName); // undefined because this refers to global object where userName is not defined
}
//chai();

const chai2 = () => {
  console.log(this); // refers to outer scope -> {} in node.js , window object in browser
};
//chai2();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;  // returns implicitly

//const addTwo = (num1, num2) => (num1 + num2) ; // return implicitly
// console.log(addTwo(2, 4));
