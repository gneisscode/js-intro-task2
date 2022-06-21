console.log("Welcome, please pick an operator and enter two operands to begin calculating!")
const user_choice= prompt("please pick an operand from the following: +, -, /, *");

const firstNum= parseFloat(prompt("Enter first number please"));
const secondNum = parseFloat(prompt("Enter second number please"));

switch (user_choice) {
  case "+":
    console.log(firstNum + secondNum);
    break;
  case "-":
    console.log(firstNum - secondNum);
    break;
  case "*":
    console.log(firstNum * secondNum);
    break;
  case "/":
    console.log(firstNum / secondNum);
    break;
  default:
    console.log("please enter a valid operator or valid operands");
}
