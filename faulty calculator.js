let a = Number(prompt("Enter your number 1 "));
let b = Number(prompt("Enter your number 2 "));

let random = Math.random();

let addition = a + b;
let Subtraction = a - b;
let Multiplication = a * b;
let Division = a / b;
let Exponentiation = a ** b;

if (random < 0.1) {
  console.log("Addition Calculation : ", Subtraction);
  console.log("Subtraction Calculation : ", Division);
  console.log("Multiplication Calculation : ", addition);
  console.log("Division Calculation : ", Exponentiation);
} else {
  console.log("Addition Calculation : ", addition);
  console.log("Subtraction Calculation : ", Subtraction);
  console.log("Multiplication Calculation : ", Multiplication);
  console.log("Division Calculation : ", Division);
}
