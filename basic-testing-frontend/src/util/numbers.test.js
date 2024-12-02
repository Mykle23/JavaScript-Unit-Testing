import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform number with type string into type number", () => {
  const num1 = "1";

  const result = transformToNumber(num1);

  expect(result).toBe(Number(num1));
});

it("should yield NaN for non-transformable values", () => {
  const input = "invaliad";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
