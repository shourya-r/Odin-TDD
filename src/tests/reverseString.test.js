import { experiments } from "webpack";
import { reverseString } from "../scripts/reverseString";

test("abcd returns dcba", () => {
  expect(reverseString("abcd")).toBe("dcba");
});

test("abijgis returns sigjiba", () => {
  expect(reverseString("abijgis")).toBe("sigjiba");
});
