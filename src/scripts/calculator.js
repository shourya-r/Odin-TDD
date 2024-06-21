const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    const x = a / b;
    let decimalPlaces;
    if (Math.floor(x) === x) decimalPlaces = 0;
    else decimalPlaces = x.toString().split(".")[1].length || 0;
    if (decimalPlaces < 3) return Number(x);
    else return Number(x.toFixed(3));
  },
};

export { calculator };
