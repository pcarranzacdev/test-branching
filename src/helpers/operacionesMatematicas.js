class Math {
  static sum(aNumbers = []) {
    return aNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  static multiplication(aNumbers = []) {
    return aNumbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
}

module.exports = Math;
