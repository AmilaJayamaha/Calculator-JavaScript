const readline = require('readline');

function startCalculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("Welcome to the Basic Calculator App!");

  function getInput(prompt, callback) {
    rl.question(prompt, (input) => {
      callback(input);
    });
  }

  function performCalculation(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Invalid input. Please enter numeric values.");
      return;
    }

    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          console.log("Error: Division by zero is not allowed!");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator!");
        return;
    }

    console.log(`Result: ${result}`);
  }

  function askForAnotherCalculation() {
    getInput("Do you want to perform another calculation? (y/n): ", (choice) => {
      if (choice.toLowerCase() === "y") {
        performCalculator();
      } else {
        rl.close();
      }
    });
  }

  function performCalculator() {
    getInput("Enter the first number: ", (num1) => {
      getInput("Enter the operator (+, -, *, /): ", (operator) => {
        getInput("Enter the second number: ", (num2) => {
          performCalculation(num1, operator, num2);
          askForAnotherCalculation();
        });
      });
    });
  }

  performCalculator();
}

startCalculator();
