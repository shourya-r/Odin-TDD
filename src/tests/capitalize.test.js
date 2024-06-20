import { capitalize } from "../scripts/capitalize";

test("abcd returns Abcd", () => {
  expect(capitalize("abcd")).toBe("Abcd");
});

test("ABCD return ABCD", () => {
  expect(capitalize("ABCD")).toBe("ABCD");
});
