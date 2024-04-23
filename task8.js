class Calculator {
  sum(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      console.error("Division by zero!");
      return NaN;
    }
  }
}

const calculator = new Calculator();

console.log(calculator.sum(5, 3));
console.log(calculator.subtraction(10, 4));
console.log(calculator.multiplication(2, 6));
console.log(calculator.division(10, 2));
console.log(calculator.division(10, 0));
