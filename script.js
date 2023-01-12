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
  delete() {}
  //   Every time a user clicks a number, it adds it to the screen
  appendNumber() {}
  // Take a function from the right side of calculator and runs the specific operation
  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
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
