let email = "Raj@ai.com";
if (email) {
  console.log("Got the email");
} else {
  console.log("Didn't get the email");
}

// falsy
false, 0, -0, BigInt(0n), "", null, undefined, NaN;

// truthy -> except falsy all are truthy
// few:  "0", "false", " ", [], {}, function(){}

let arr = [];
if (arr.length == 0) {
  console.log("Array is empty");
}

const obj = {};
if (Object.keys(obj).length == 0) {
  console.log("Object is empty");
}
