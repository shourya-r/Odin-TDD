import { capitalize } from "../scripts/capitalize";

test("abcd returns Abcd", () => {
  expect(capitalize("abcd")).toBe("Abcd");
});

test("ABCD return ABCD", () => {
  expect(capitalize("ABCD")).toBe("ABCD");
});

test("aBCeXY returns ABCeXY", () => {
  expect(capitalize("aBCeXY")).toBe("ABCeXY");
});

test("1abCd returns 1abCd", () => {
  expect(capitalize("1abCd")).toBe("1abCd");
});

test("@abCd returns @abCd", () => {
  expect(capitalize("@abCd")).toBe("@abCd");
});
