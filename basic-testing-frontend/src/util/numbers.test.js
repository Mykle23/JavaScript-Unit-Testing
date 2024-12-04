import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

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

describe("cleanNumbers()", () => {
  it('"should return an array of number values if an array of string number values is provided"', () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
