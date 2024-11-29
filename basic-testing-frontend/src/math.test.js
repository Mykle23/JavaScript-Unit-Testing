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
