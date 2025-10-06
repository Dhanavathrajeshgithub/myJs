let marvel_heros = ["thor", "hulk", "ironman", "spidy"];
let dc_heros = ["batman", "flash", "superman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'thor', 'hulk', 'ironman', 'spidy', ['batman', 'flash', 'superman'] ]
// console.log(marvel_heros[4][0]); // "batman"

// let allHeros = marvel_heros.concat(dc_heros); // concat doesn't modifies original array
// console.log(allHeros);

// let allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);

console.log(Array.isArray("Rajesh")); // false
console.log(Array.from("Rajesh")); // ['R', 'a', 'j', 'e', 's', 'h'];
console.log(Array.from({ name: "Rajesh" })); // [] -> interesting case
console.log(Array.from({ 0: "Raj", 1: "Naik", length: 3 })); // ["Raj", 'Naik', undefined]
console.log(Array.from({ 0: "Raj", 1: "Naik", 2: "Dhan", length: 2 })); // ["Raj", "Naik"]

console.log(Array.of(10, 20, 30)); // [10, 20, 30]

console.log(Array.isArray(marvel_heros));
