const form = document.querySelector("form");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let res = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let h = parseInt(height.value);
  let w = parseInt(weight.value);
  console.log(h, w);

  if (h == " " || h < 0 || isNaN(h)) {
    res.innerText = `Please enter a valid height`;
  } else if (w == " " || w < 0 || isNaN(w)) {
    res.innerText = `Please enter a valid weight`;
  } else {
    let bmi = w / (((h / 100) * h) / 100);
    res.innerText = `Your BMI is ${bmi.toFixed(2)}`;

    let p = document.createElement("p");
    if (bmi < 18.6) {
      p.innerHTML = `You are under weight`;
    } else if (bmi < 24.9) {
      p.innerHTML = `You are in Normal range`;
    } else {
      p.innerHTML = `You are over weight`;
    }
    res.appendChild(p);
  }
});
