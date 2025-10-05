// statement:  user will add any number of items to the cart
// function calculateCartPrice(...num) {
//   //  ... -> rest operator (it collects all the values and makes an array)
//   return num; // num is an array
// }

// console.log(calculateCartPrice(2));  // [2]
// console.log(calculateCartPrice(2, 3, 4, 5, 6));  // [2,3,4,5,6]

// spread operator(...): it spreads the array into individual elements
function calculateCartPrice(num1, num2, num3) {
  return num1 + num2 + num3;
}
//let arr = [2, 3, 4];
//console.log(calculateCartPrice(...arr)); // 9

function changeArr(arr) {
  arr[0] = 100;
}

let arr = [1, 2, 3];
changeArr(arr);
//console.log(arr); // [100,2,3] -> pass by reference

function changeObj(obj) {
  obj.name = "Raj Naik";
}
let obj = {
  name: "jhsjkd",
};
changeObj(obj);
console.log(obj.name); // Raj Naik -> pass by reference
