let myObj = {
  fr: "france",
  jp: "japan",
  in: "bharat",
};

// for (const it of myObj) {   //TypeError: myObj is not iterable
//   console.log(myObj);
// }

// FOR  IN
for (const key in myObj) {
  //console.log(`key ${key} : value ${myObj[key]}`);
}

let arr = ["Rajesh", "Raju", "Bjehu"];
for (const idx in arr) {
  //console.log(arr[idx]);
}

/// MAP
let map = new Map();
map.set("IN", "India");
map.set("IN", "Bharat"); // overrides
map.set("Fr", "France");
map.set(0, "Rajesh");

for (const key in map) {
  // not iteratable
  console.log(key);
}
