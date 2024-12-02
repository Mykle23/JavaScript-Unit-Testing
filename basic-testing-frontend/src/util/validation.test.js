import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";
describe("validateStringNotEmpty()", () => {
  it("should throw and error if empty string", () => {
    const input = "";
    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty/);
  });

  it("should throw an error if only white spaces", () => {
    const input = "    ";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty/);
  });

  it("should not throw an error if any valid value is pass", () => {
    const input = "valid input";

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).not.toThrow();
  });
  it("should  throw an error if any other value than string is provided", () => {
    const inputNum = 1;
    const inputObj = {};
    const inputBool = true;
    const resultFnNum = () => validateStringNotEmpty(inputNum);
    const resultFnObj = () => validateStringNotEmpty(inputObj);
    const resultFnBool = () => validateStringNotEmpty(inputBool);

    expect(resultFnNum).toThrow();
    expect(resultFnObj).toThrow();
    expect(resultFnBool).toThrow();
  });
});
describe("validateNumber()", () => {
  it("should not throw an error if valid number", () => {
    const input = 1;

    const resultFn = () => validateNumber(input);

    expect(resultFn).not.toThrow();
  });

  it("should throw number if invalid number", () => {
    const input = "invaliad word";

    const resultFn = () => validateNumber(input);

    expect(resultFn).toThrow(/Invalid number input/);
  });
});
