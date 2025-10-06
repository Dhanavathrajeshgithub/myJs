// Immediately Invoked Function Expression (IIFE)
// Purpose: To create a new scope and avoid polluting the global namespace
let x = 10;
(function chai() {
  // named iife
  console.log("DB Connected");
})(); // DB conected

(function () {
  x = 100;
})();

console.log(x); // 100;

((name) => {
  console.log(`Hello, ${name}`);
})("Rajesh");
