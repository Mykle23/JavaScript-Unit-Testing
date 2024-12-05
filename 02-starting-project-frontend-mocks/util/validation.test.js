import { vi, it, describe, expect } from "vitest";
import { validateNotEmpty } from "./validation";
vi.mock("./errors.js", () => {
  return {
    default: {
      ValidationError: class ValidationError extends Error {
        constructor(message) {
          super(message);
          this.name = "ValidationError"; // Nombre del error personalizado
        }
      },
    },
  };
});
describe("validateNotEmpty()", () => {
  it("should throw error if argument is an empty string", () => {
    const emptyText = "";
    const errorMessage = "Text can't be empty string";

    const result = () => validateNotEmpty(emptyText, errorMessage);

    expect(result).toThrow();
  });
  it("should throw error with the message", () => {
    const emptyText = "";
    const errorMessage = "Text can't be empty string";

    const result = () => validateNotEmpty(emptyText, errorMessage);

    expect(result).toThrow(/Text can't be empty string/);
  });
});
