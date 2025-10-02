// const score = 100;
// console.log(score); // 100

// let balance = new Number(300.5316364);
// console.log(balance); // [Number: 300.5]

// console.log(balance.toString()); // "300.5316364"
// console.log(balance.toString().length); // 11
// console.log(balance.toFixed(2)); // "300.53" -> rounds to 2 decimal places

// let otherNum = 123.923345;
// console.log(otherNum.toPrecision(4)); // "123.9" -> total 4 digits
// console.log(otherNum.toPrecision(3)); // "124" -> total 3 digits

// balance = "abc";
// console.log(balance); // abc
// console.log(typeof balance); // string

const salary = 10003400.3447;
// console.log(salary.toLocaleString("en-IN"));

// +++++++++++++     MATH OBJECT    +++++++++++++++
// console.log(Math); // object
// console.log(Math.PI);
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.01)); // 5

// console.log(Math.random()); // [0, 1)
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 11)); // [0, 10]

// [min, max]
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // [10, 20];
// ;
