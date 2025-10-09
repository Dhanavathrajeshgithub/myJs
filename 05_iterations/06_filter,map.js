//FILTER  -> returns a new array that satisfy the condition

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -10];

// let NumGreaterThan4 = arr.filter((num) => {
//   return num > 4;
// });

let NumGreaterThan4 = arr.filter((num) => num > 4);
//console.log(NumGreaterThan4);

let error = arr.filter((num) => {
  return num + 10;
});
// console.log(error); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// MAP   -> return a new array of same size with modified values
let newArr = arr.map((num) => {
  return num + 10;
});
// console.log(newArr);
