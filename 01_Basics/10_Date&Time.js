let myDate = new Date();
//console.log(myDate); // current date and time
// console.log(myDate.toString());

// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate); // OBjeCt

// let myCreatedDate = new Date(2025, 2, 14);
// let myCreatedDate = new Date("2023-03-14");
// let myCreatedDate = Date.now(); // milliseconds since 1970
let myCreatedDate = new Date(); // milliseconds since 1970
// console.log(myCreatedDate.getFullYear());
// console.log(myCreatedDate.getTime());
// console.log(myCreatedDate.getMonth());

myCreatedDate.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata",
  year: "2-digit",
});
console.log(myCreatedDate);
