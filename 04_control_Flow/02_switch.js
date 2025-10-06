let key = "Mar";

switch (key) {
  case "jan":
    console.log("January");
  case "feb":
    console.log("February");
  case "Mar":
    console.log("March");
  case "apr":
    console.log("April");
  case "may":
    console.log("May");
  default:
    console.log("Default");
}

// output :  March  April  May  Default

key = "Mar";

switch (key) {
  case "jan":
    console.log("January");
  case "feb":
    console.log("February");
  case "Mar":
    console.log("March");
  case "apr":
    console.log("April");
    break;
  case "may":
    console.log("May");
  default:
    console.log("Default");
}

// output :  March  April
