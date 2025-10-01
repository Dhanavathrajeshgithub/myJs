const name = "Rajesh";
const repoCount = 50;

// console.log("My name is " + name + " and my repo count is " + repoCount);    NOT  RECOMMENDED

/*   String Interpolation -> is a way to embed variables or expressions directly inside a string 
console.log(
  `My name is ${name.toUpperCase()} and my repo count is ${repoCount}`
);
*/
let nameObj = new String("Rajessssh");
//console.log(nameObj);
// console.log(nameObj.__proto__); // {} // shows all the methods of string
// console.log(nameObj.length);
//console.log(nameObj.toLowerCase());
//console.log(nameObj.charAt(2));
//console.log(nameObj.indexOf("s"));

const newStr = nameObj.substring(2, 6); // [stIdx, endIdx)   treat -ve as 0
//console.log(newStr);

const newStr2 = nameObj.slice(8, -8); // [stIdx, endIdx)
//console.log(newStr2);

const email = "      Raj Naik @ gmail.com         ";
//console.log(email.trim()); // "Raj Naik @ gmail.com"

// const url = "https://@10www.google@10.com";
// console.log(url.replace("@10", "-")); // only 1st occurence is removed
// console.log(url.replaceAll("@10", "-")); //  all occurences are removed
// console.log(url.includes("google")); // true
// console.log(url.indexOf("google")); // 15
// console.log(url.lastIndexOf("@"));

const lang = "Js, Python,  c++, Java, Bava, Rava, Ruby";
const langArr = lang.split(","); //['Js', 'Python', 'c++', 'Java', 'Bava', 'Rava', 'Ruby']
const langArr2 = lang.split(",", 3); //['Js', 'Python', 'c++']
// console.log(langArr2);
