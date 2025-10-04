// const tinderUser = new Object(); // singleton object
const tinderUser = {};
tinderUser.id = "1223abc";
tinderUser.name = "Sam Jam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const employee = {
  id: "123ajdhjhs",
  fullName: {
    userName: {
      surname: "Dhanavath",
      name: "Rajesh",
      title: "Naik",
    },
  },
};

//console.log(employee?.fullName?.userName?.name);

const src1 = { 1: "a", 2: "b" };
const src2 = { 3: "c", 4: "d" };
const src3 = { 5: "e", 6: "f" };

//const tar = Object.assign(src1, src2, src3); // src1 <-- src2+src3   // not good practice
// console.log(tar);
// console.log(src1);

//const tar = Object.assign({}, src1, src2, src3); // {} <-- src1+src2+src3
// console.log(tar);

const tar = { ...src1, ...src2, ...src3 }; // preferred
// console.log(tar);

const users = [
  {
    id: "1233",
    name: "sjdhhjsk",
  },
  {
    id: "8382",
    name: "liwdw",
  },
  {
    id: "817",
    name: "kjdhfkjs",
  },
];

users[1].id;

console.log(Object.keys(tinderUser)); ///   return array of keys -> ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // return array of values -> [ '1223abc', 'Sam Jam', false ]
console.log(Object.entries(tinderUser)); // [ ['id', '1223abc'], ['name', 'Sam Jam'], ['isLoggedIn', false]  ]
console.log(tinderUser.hasOwnProperty("name")); // true
