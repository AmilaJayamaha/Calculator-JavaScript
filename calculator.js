const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate() {
  console.log("Welcome to the Basic Calculator App!");

  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the operator (+, -, *, /): ", (operator) => {
      rl.question("Enter the second number: ", (num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

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
              rl.close();
              return;
            }
            result = num1 / num2;
            break;
          default:
            console.log("Invalid operator!");
            rl.close();
            return;
        }

        console.log(`Result: ${result}`);
        rl.question("Do you want to perform another calculation? (y/n): ", (choice) => {
          if (choice.toLowerCase() !== "y") {
            rl.close();
          } else {
            calculate();
          }
        });
      });
    });
  });
}

calculate();
