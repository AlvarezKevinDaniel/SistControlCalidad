// Functions for calculator
let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  //displayValue += number + 'x'; error: Agrega un carácter extra
  return displayValue;
}

function appendOperation(operation) {
  displayValue += operation;
  return displayValue;
}

function clearDisplay() {
  displayValue = '';
  return displayValue;
}

function calculate() {
  try {
    if (displayValue.includes('/0')) {
      displayValue = 'Error';
    } else {
//Error: suma 10 al valor displayValue = (eval(displayValue) + 10).toString();      
displayValue = eval(displayValue).toString();
    }
  } catch (e) {
    displayValue = 'Error';
  }
  return displayValue;
}
module.exports = { appendNumber, appendOperation, clearDisplay, calculate };
