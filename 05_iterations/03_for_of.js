// for of
// ["", "", ""]
// [{}, {}, {}]

let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //console.log(num);
}

let greeting = "Hello Rajesh";
for (const char of greeting) {
  //console.log(char);
}

/// MAP
let map = new Map();
map.set("IN", "India");
map.set("IN", "Bharat"); // overrides
map.set("Fr", "France");
map.set(0, "Rajesh");
//console.log(map); // stores in the same order that you inserted

for (const [key, value] of map) {
  console.log(key + ":-" + value);
}
