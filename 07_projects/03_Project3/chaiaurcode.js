const clock = document.querySelector("#clock");

// const func = () => {
//   setTimeout(() => {
//     clock.innerText = new Date().toLocaleTimeString();
//     func();
//   }, 1000);
// };
// func();

setInterval(() => {
  clock.innerText = new Date().toLocaleTimeString();
}, 1000);
