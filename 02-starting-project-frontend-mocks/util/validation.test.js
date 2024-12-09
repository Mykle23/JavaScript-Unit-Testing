import { vi, it, describe, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should throw error if an empty string is provided as a value", () => {
    const emptyText = "";
    const errorMessage = "Text can't be empty string";

    const resultFn = () => validateNotEmpty(emptyText, errorMessage);

    expect(resultFn).toThrow();
  });
  it("should throw error if argument is an empty blank string", () => {
    const emptyText = "  ";
    const errorMessage = "Text can't be empty string";

    const result = () => validateNotEmpty(emptyText, errorMessage);

    expect(result).toThrow();
  });
  it("should throw error with the message", () => {
    const emptyText = "";
    const errorMessage = "Text can't be empty string";

    const result = () => validateNotEmpty(emptyText, errorMessage);

    expect(result).toThrow(errorMessage);
  });
});
