class Math {
  static sum(aNumbers = []) {
    return aNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  static multiplication(aNumbers = []) {
    return aNumbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }

  static subtraction(a, b) {
    return a - b;
  }

  static division(a, b) {
    return a / b;
  }
}

module.exports = Math;
