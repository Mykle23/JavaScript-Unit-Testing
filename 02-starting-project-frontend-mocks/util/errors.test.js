import { it, describe, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should set arguments to contructor", () => {
    const statusCode = 404;
    const message = "Message test";
    const data = [];

    const result = new HttpError(statusCode, message, data);

    expect(result).toHaveProperty("statusCode");
    expect(result).toHaveProperty("message");
    expect(result).toHaveProperty("data");
  });
});

describe("class ValidationError", () => {
  it("should set arguments to constructor", () => {
    const message = "Example Message";

    const result = new ValidationError(message);

    expect(result).toHaveProperty("message");
  });
});
