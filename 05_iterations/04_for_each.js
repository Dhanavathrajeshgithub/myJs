// FOR EACH  ->  higher order function

let languages = ["Cpp", "py", "Java", "JS", "C"];

languages.forEach(function (lang) {
  //console.log(lang);
});

languages.forEach((lang) => {
  //console.log(lang);
});

// Full structure
languages.forEach((lang, idx, arr) => {
  console.log(lang, idx, arr);
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
  console.log(obj.lang);
});
