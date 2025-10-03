// singleton  -> Object.create()

// object literals

let mySym = Symbol("key1");
let jsObj = {
  name: "Rajesh", /// internally -> "name": "Rajesh"
  "full name": "Dhanavath Rajesh",
  [mySym]: "val1", // inserting symbol in object
  age: 18, //  ""       ->  "age": 18
  email: "Rajesh@google.com",
  location: "Hyd",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "tue"],
};

// console.log(jsObj["name"]);
// console.log(jsObj.age);
// // console.log(jsObj."full name");  //  wrong
// console.log(jsObj["full name"]);
// console.log(jsObj[mySym]); // accessing symbol as key in object

// jsObj.email = "Rajesh@chatgpt.com"; // email changed
// //Object.freeze(jsObj); // furthur modifications are not considered
// jsObj.email = "Rajesh@microsoft.com";
// console.log(jsObj);

// Method or Function
jsObj.greet = function () {
  console.log(`Hello World`);
};
jsObj.greet2 = function () {
  console.log(`Hello Mr. ${this["full name"]}`);
};
console.log(jsObj.greet); // returns reference to the function
console.log(jsObj.greet()); // executes the method
console.log(jsObj.greet2());
