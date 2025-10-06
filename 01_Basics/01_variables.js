const accountId = 122344;
let accountEmail = "Raj@email.com";
var accPass = "12345";
accountCity = "Delhi"; // global variable attached to window object

// accountId = 123;  not allowed
accountEmail = "microsoft@gmail.com";
accPass = "67890";
accountCity = "Hyderabad";

console.log(accountId);
console.table([accountId, accountEmail, accPass, accountCity]);

/*
Let and const are block scoped
var is function scoped
*/
console.log(a); // undefined
{
  let city = "Banglore";
  var a = 10;
  console.log(city);
}
// console.log(city); not allowed

console.log(a);
