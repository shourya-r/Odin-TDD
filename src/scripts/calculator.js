const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return undefined;
    return a + b;
  },
  subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return undefined;
    return a - b;
  },
  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return undefined;
    return a * b;
  },
  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return undefined;
    const x = a / b;
    let decimalPlaces;
    if (Math.floor(x) === x) decimalPlaces = 0;
    else decimalPlaces = x.toString().split(".")[1].length || 0;
    if (decimalPlaces < 3) return Number(x);
    else return Number(x.toFixed(3));
  },
};

export { calculator };
