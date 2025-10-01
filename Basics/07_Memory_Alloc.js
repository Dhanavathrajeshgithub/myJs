////     Primitive (stack)  value is stored in stack
let name = "Rajesh";
let newName = name; // copy of name is assigned to newName
newName = "Naik";
console.log(name);
console.log(newName);

/// Non-Primitive (heap)   value is stored in heap and reference is stored in stack
let myObj = {
  Name: "RajNaik",
  eating() {
    console.log("Eating ...");
  },
};
let newObj = myObj; // reference of myObj is assigned to newObj
newObj.email = "Raj@email.com";
console.log(myObj.email);
