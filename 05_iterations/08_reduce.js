let arr = [1, 2, 3, 4];
let initialValue = 10;

let total = arr.reduce(function (acc, curr) {
  return acc + curr;
}, initialValue);
console.log(total); // 20

total = arr.reduce((acc, curr) => acc + curr, initialValue);
console.log(total);
