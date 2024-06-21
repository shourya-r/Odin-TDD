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
