import { it, describe, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError", () => {
  it("should containt the provided status code, message and data", () => {
    const statusCode = 404;
    const message = "Message test";
    const data = { key: "test" };

    const result = new HttpError(statusCode, message, data);

    expect(result).toHaveProperty("statusCode");
    expect(result).toHaveProperty("message");
    expect(result).toHaveProperty("data");
    expect(result.statusCode).toBe(statusCode);
    expect(result.message).toBe(message);
    expect(result.data).toBe(data);
  });
  it("should container undefined as data if no data is provided", () => {
    const statusCode = 404;
    const message = "Message test";
    const data = { key: "test" };
    const result = new HttpError(statusCode, message);

    expect(result.statusCode).toBe(statusCode);
    expect(result.message).toBe(message);
    expect(result.data).toBeUndefined();
  });
});

describe("class ValidationError", () => {
  it("should set arguments to constructor", () => {
    const message = "Example Message";

    const result = new ValidationError(message);

    expect(result).toHaveProperty("message");
    expect(result.message).toBe(message);
  });
});
