//  Primitive  ->  call by value (copy of the value is passed)
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
let myName = "Rajesh Naik";
let age = 100;
let isMale = true;
let height = 16.9;
let study = undefined;
let works = null;
let Identity = Symbol("123");
let id = Symbol("123");
console.log(id);
console.log(Identity);
let bigNumber = 84n;
//console.log(typeof bigNumber);

// Non-Primitive (Reference)  ->  call by reference (reference of the value is passed)
// 1 type : Object (Array, Function, Date, etc. are special types of objects)

let heros = ["shaktiman", "hanuman", "ram"];
let myObj = {
  name: "Rajesh",
  age: 24,
  eating() {
    console.log("eating...");
  },
};
let myFunc = function () {
  console.log("function is called...");
};
let date = Date.now();
console.log(date);

/*  typeof and return 
        typeof         Result
        
        String	       "string"
        Number	       "number"
        Boolean	       "boolean"
        Undefined	   "undefined"
        Null	       "object"
        Symbol	       "symbol"
        BigInt	       "bigint"
        Array(Object)  "object"
        Object	       "object"
        Function	   "function"
        Date (Object)  "object"

*/
