class Calculator {
  // constructor is a special function that creates and initializes an object instance of a class.
  constructor(previousOperandandTextElement, currentOperandandTextElement) {
    // this. in a function it references the object calling that function at a given time.
    // below are variables for the class. These give us a way to set text elements inside of our calculator class
    this.previousOperandandTextElement = previousOperandandTextElement;
    this.currentOperandandTextElement = currentOperandandTextElement;
    // Next step is to think of all the operations our calculator class can conform (i.e. All Clear function, Delete function, Divide function, etc.)
    // When the calculator is loaded, this.clear will clear all inputs and  set all values to default values when we create a new calculator
    this.clear();
  }
  //   Clears out our different variables
  clear() {
    // defaults to empty string if they clear it
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  //   Removes a single number
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  //   Every time a user clicks a number, it adds it to the screen
  appendNumber(number) {
    // This function will allow numbers to be converted to string and then appended after each button is pressed.
    // if statement is created to fix issue where period is getting appended each time it is pressed. This if statement checks that if the number is equal to . and the current operand already has a ., return the current operand
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  // Take a function from the right side of calculator and runs the specific operation
  chooseOperation(operation) {
    if (this.currentOperand === " ") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.currentOperandandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandandTextElement = document.querySelector("[data-current-operand]");

// This is how you define a class, you state new followed by the class name
const calculator = new Calculator(previousOperandandTextElement, currentOperandandTextElement);

// say forEach because we want to loop over all different buttons
numberButtons.forEach((button) => {
  // each button will have an event listener which states, whenever we click on the button, we will do something and in our case, we want to add the number (append number) of whatever is inside the button i.e. numbers inside each button 1, 2, 3, 4,. etc
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    // After we append, we want to call the function updateDisplay to update the values we see in the output.
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
