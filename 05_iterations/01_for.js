// for
for (let index = 0; index < 10; index++) {
  let res = console.log(index);
  console.log(res); // undefined
}

// break
for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log("5 is thop");
    break;
  }
  console.log(index);
}

// continue
for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log("5 is thop");
    continue;
  }
  console.log(index);
}
