class Math {
  static sum(aNumbers = []) {
    return aNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

module.exports = Math;
