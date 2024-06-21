import { calculator } from "../scripts/calculator";

test("add(2,4) returns 6", () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test("subtract(8,3) returns 5", () => {
  expect(calculator.subtract(8, 3)).toBe(5);
});

test("multiply(7,9) returns 63", () => {
  expect(calculator.multiply(7, 9)).toBe(63);
});

test("divide(9,2) returns 4.5", () => {
  expect(calculator.divide(9, 2)).toBe(4.5);
});

test("add(-2,4) returns 2", () => {
  expect(calculator.add(-2, 4)).toBe(2);
});

test("subtract(3,-3) returns 11", () => {
  expect(calculator.subtract(3, -3)).toBe(6);
});

test("multiply(-6,3) returns -18", () => {
  expect(calculator.multiply(6, -3)).toBe(-18);
});

test("divide(8,-2) returns -4", () => {
  expect(calculator.divide(8, -2)).toBe(-4);
});

test("add(-8,-4) returns -12", () => {
  expect(calculator.add(-8, -4)).toBe(-12);
});

test("subtract(-1,-6) returns 5", () => {
  expect(calculator.subtract(-1, -6)).toBe(5);
});

test("multiply(-5,-8) returns 40", () => {
  expect(calculator.multiply(-5, -8)).toBe(40);
});

test("divide(-5,-2) returns 2.5", () => {
  expect(calculator.divide(-5, -2)).toBe(2.5);
});

test("divide(-11,-3) returns 3.667", () => {
  expect(calculator.divide(-11, -3)).toBe(3.667);
});
