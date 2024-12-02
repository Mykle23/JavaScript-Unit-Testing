import { it, expect } from "vitest";
import { add } from "./math";
it("should summarize all number values in a array", () => {
  // Arrange
  const numbers = [0, 1, 2, 3, 4];
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toBe(10);
});

it("should yield NaN if a least one invalid number is provided", () => {
  const inputs = ["invalid", 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  expect(result).toBe(3);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow(/is not iterable/);
});

it("should should throw an error if provided with multiple arguments instead of an array", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
