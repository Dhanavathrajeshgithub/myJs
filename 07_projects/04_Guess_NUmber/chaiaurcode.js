let counter = 10;
let form = document.querySelector("form");
const number = Math.floor(Math.random() * 100 + 1); // 1 - 100

const Reset = () => {
  let result = document.querySelector(".Result");
  result.textContent = "";
  let prevGuessArr = document.querySelector(".guesses");
  prevGuessArr.innerText = "";
  let lowOrHigh = document.querySelector(".lowOrHi");
  lowOrHigh.innerText = "";
  document.querySelector(".lastResult").innerText = 10;
  counter = 10;
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  counter--;
  let lowOrHigh = document.querySelector(".lowOrHi");
  lowOrHigh.innerText = "";

  let val = parseInt(document.querySelector("#guessField").value);
  console.log(val, number);
  if (val == number) {
    let result = document.querySelector(".Result");
    result.innerText = "You have guessed it!";
    result.style.backgroundColor = "Green";
    setTimeout(() => {
      Reset();
    }, 3000);
  } else {
    let prevGuessArr = document.querySelector(".guesses");
    prevGuessArr.innerText += `${val},`;
    if (number < val) {
      lowOrHigh.innerText = "Low";
    } else {
      lowOrHigh.innerText = "High";
    }
  }
  document.querySelector(".lastResult").innerText = counter;
  if (counter == 0) {
    let result = document.querySelector(".Result");
    result.innerText = "You haven't guessed in 10 choices!";
    result.style.backgroundColor = "Red";
    setTimeout(() => {
      Reset();
    }, 3000);
  }
});
