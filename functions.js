let displayValue = '';
let memoryValue = null; // Variable para la memoria

function appendNumber(number) {
  displayValue += number;
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
      displayValue = eval(displayValue).toString();
    }
  } catch (e) {
    displayValue = 'Error';
  }
  return displayValue;
}

// Nueva función: Elevar al cuadrado
function square() {
  try {
    displayValue = (Math.pow(eval(displayValue), 2)).toString();
  } catch (e) {
    displayValue = 'Error';
  }
  return displayValue;
}

// Nueva función: Guardar en memoria
function saveToMemory() {
  memoryValue = displayValue;
  return `Guardado: ${memoryValue}`;
}

// Nueva función: Recuperar de memoria
function retrieveFromMemory() {
  displayValue = memoryValue || '';
  return displayValue;
}

module.exports = { appendNumber, appendOperation, clearDisplay, calculate, square, saveToMemory, retrieveFromMemory };
