// Promise -> A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// A promise is said to be settled if it is either fulfilled or rejected, but not pending.

// Creating a Promise
//let promise1 = new Promise(function (resolve, reject) {
// Do an Async task -> (Db calls, Cryptography, Network)
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve("Task success");
//   }, 1000);
// });
// promise1.then((res) => {
//   console.log(`Promise is resolved with msg "${res}"`);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve({ name: "Jonny", email: "vanny@example.com" });
//   }, 1000);
// }).then((res) => {
//   console.log(res);
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Rajesh", email: "Raj@example.com" });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   }, 1000);
// });

// promise4
//   .then((res) => {
//     return res.username;
//   })
//   .then((username) => {
//     console.log("username", username);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally i will be executed");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Some error occured");
//   }, 1000);
// });

// async function consumePromise() {
//   try {
//     const res = await promise5;
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }
// consumePromise();

// async function fetchUsers() {
//   try {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await users.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// }
// fetchUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
