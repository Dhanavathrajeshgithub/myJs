/*

Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope (either the function or the global scope) during the compilation phase, before code execution. 
This means that no matter where variables or functions are declared in the code, their declarations are "hoisted" to the top, allowing them to be referenced before the actual declaration line appears in the source code.

Key points about hoisting:

Only declarations are hoisted; initializations or assignments are not moved.

Variables declared with var are hoisted and initialized with undefined, so accessing them before the declaration line does not cause an error but returns undefined.

Variables declared with let and const are also hoisted but are not initialized immediately, causing a Temporal Dead Zone (TDZ) between the start of the block and the actual declaration line. Accessing them before declaration results in a ReferenceError.

Function declarations are hoisted entirely, so they can be invoked before their definition in the code.

Example with var:

javascript
console.log(x); // undefined (declaration hoisted, but assignment not)
var x = 5;
Example with let:

javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
In summary, hoisting allows JavaScript to handle variable and function declarations flexibly, but can sometimes lead to confusion if not properly understood, especially with let and const which enforce stricter temporal scoping rules.

*/
