const { appendNumber, appendOperation, clearDisplay, calculate } = require('./functions');

describe('Calculadora Simple', () => {
  beforeEach(() => {
    clearDisplay(); // Limpia el valor entre pruebas
  });

  test('Debería agregar un número al display', () => {
    expect(appendNumber('1')).toBe('1');
    expect(appendNumber('2')).toBe('12');
  });

  test('Debería agregar una operación al display', () => {
    appendNumber('5');
    expect(appendOperation('+')).toBe('5+');
  });

  test('Debería limpiar el display', () => {
    appendNumber('123');
    expect(clearDisplay()).toBe('');
  });

  test('Debería calcular una expresión correctamente', () => {
    appendNumber('2');
    appendOperation('+');
    appendNumber('3');
    expect(calculate()).toBe('5');
  });

  test('Debería manejar errores de cálculo', () => {
    appendNumber('2');
    appendOperation('/');
    appendNumber('0'); // División entre cero
    expect(calculate()).toBe('Error');
  });
});
