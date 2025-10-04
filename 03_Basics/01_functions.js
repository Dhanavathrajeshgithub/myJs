function sayMyName() {
  console.log("R");
  console.log("a");
  console.log("j");
  console.log("e");
  console.log("s");
  console.log("h");
}

// console.log(sayMyName); // reference
//console.log(sayMyName()); // function execution

function addNumbers(num1, num2) {
  return num1 + num2;
}

//let res = addNumbers(); //   NaN
console.log(addNumbers(3, 4));

function loginUserMessage(userName = "Default") {
  if (userName) {
    console.log(`${userName} is loggedIn`);
  }
}

console.log(loginUserMessage()); // Default
