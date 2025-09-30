/*
const accountId = 122344;
let accountEmail = "Raj@email.com";
var accPass = "12345";
accountCity = "Delhi";

// accountId = 123;  not allowed
accountEmail = "microsoft@gmail.com";
accPass = "67890";
accountCity = "Hyderabad";

console.log(accountId);
console.table([accountId, accountEmail, accPass, accountCity]);
*/

/*
Let and const are block scoped
var is funtion scoped
*/
console.log(a);
{
  let city = "Banglore";
  var a = 10;
  console.log(city);
}
// console.log(city); not allowed

console.log(a);
