let score = 33;

console.log(typeof score);
// console.log(typeof(score));

let str = "33";
let scoreInNumber = Number(str);

let str2 = "33abc";
let newNum = Number(str2);
console.log(typeof newNum); // number
console.log(newNum); //  NaN  ->  Not a Number
console.log(typeof NaN); // number

// null -> 0
// undefined -> NaN

let isLoggedIn = -100; // true

let boolFlag = Boolean(isLoggedIn);
console.log(boolFlag);

// null -> false,  undefined -> false,  "" -> false
// "abc" -> true,  -100 , 100 , -> true
