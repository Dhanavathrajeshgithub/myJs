// FOR EACH  ->  higher order function
// Only for arrays -> array method

let languages = ["Cpp", "py", "Java", "JS", "C"];

languages.forEach(function (lang) {
  //console.log(lang);
});

languages.forEach((lang) => {
  //console.log(lang);
});

// Full structure
languages.forEach((lang, idx, arr) => {
  //console.log(lang, idx, arr);
});

let arr = [
  {
    lang: "Java script",
    file: "js",
  },
  {
    lang: "Java",
    file: "java",
  },
];

arr.forEach((obj) => {
  //console.log(obj.lang);
});

// FOR EACH loop returns nothing
let arr2 = [1, 2, 3];
let values = arr2.forEach((val) => {
  return val;
});
console.log(values); // undefined
