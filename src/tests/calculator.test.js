import { calculator } from "../scripts/calculator";

test("add(2,4) returns 6", () => {
  expect(calculator.add(2, 4)).toBe(6);
});
