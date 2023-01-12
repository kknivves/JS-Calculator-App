class Calculator {
  // constructor is a special function that creates and initializes an object instance of a class.
  constructor(previousOperandandTextElement, currentOperandandTextElement) {
    // this. in a function it references the object calling that function at a given time.
    // below are variables for the class. These give us a way to set text elements inside of our calculator class
    this.previousOperandandTextElement = previousOperandandTextElement;
    this.currentOperandandTextElement = currentOperandandTextElement;
    // Next step is to think of all the operations our calculator class can conform (i.e. All Clear function, Delete function, Divide function, etc.)
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandandTextElement = document.querySelector("[data-current-operand]");
