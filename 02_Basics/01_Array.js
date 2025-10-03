// Array
let myArr = [1, 2, 3, true, "Rajesh"];
let heros = ["shaktiman", "naagraj"];
let arrObj = new Array(1, 2, 3, 4, 5, true, "Rajesh");

// array -> resizeble & mix of dataTypes
// arrObj.push(6);
// arrObj.push(7); // push at back O(1)
// console.log(arrObj);
// console.log(arrObj.pop()); // pop from back O(1)
// console.log(arrObj.unshift(10, 20)); // push at begin O(n)
// console.log(arrObj);
// console.log(arrObj.shift()); // pop from begin O(n)

// console.log(arrObj.includes(9));
// console.log(arrObj.indexOf(9));

//  #########   JOIN   ###########
// let strArr = arrObj.join(); // converts arr to string
// console.log(strArr); // "1,2,3,4,5,true,Rajesh"

// #########  SLICE  &  SPLICE  ##########  //
let slicedArr = arrObj.slice(2, 6); // [2, 6)
// console.log(slicedArr); // [3,4,5, true]
// console.log(arrObj); // doesn't changes

console.log(arrObj);
let splicedArr = arrObj.splice(2, 2, "Dhanavath"); // removes 2 ele st from idx 2 from original array & replaces it with "Rajesh"
console.log(splicedArr);
console.log(arrObj);
