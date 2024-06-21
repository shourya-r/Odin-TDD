import { calculator } from "../scripts/calculator";

test("add(2,4) returns 6", () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test("subtract(8,3) returns 5", () => {
  expect(calculator.subtract(8, 3)).toBe(5);
});
