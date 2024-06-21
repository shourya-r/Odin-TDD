import { experiments } from "webpack";
import { reverseString } from "../scripts/reverseString";

test("abcd returns dcba", () => {
  expect(reverseString("abcd")).toBe("dcba");
});

test("abijgis returns sigjiba", () => {
  expect(reverseString("abijgis")).toBe("sigjiba");
});

test("Cats are cute returns etuc era staC", () => {
  expect(reverseString("Cats are cute")).toBe("etuc era staC");
});

test("I have 24 dogs returns sgod 42 evah I", () => {
  expect(reverseString("I have 24 dogs")).toBe("sgod 42 evah I");
});
