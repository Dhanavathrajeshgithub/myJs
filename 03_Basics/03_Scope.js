{
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);  // ReferenceError: a is not defined
// console.log(b);  // ReferenceError: b is not defined
//console.log(c); // 30  (var is function-scoped or globally scoped)

//   ###########     nested scope    ###########
function one() {
  const username = "Rajesh";

  function two() {
    const website = "vscode";
    //console.log(username); // username is accessible
  }

  two();
  //   console.log(website); // ReferenceError: website is not defined
}

one();

// +++++++++++  Hoisting   +++++++++++++++

console.log(addOne(5)); // 6
function addOne(num1) {
  return num1 + 1;
}

//console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num1) {
  return num1 + 2;
};
