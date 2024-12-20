import { describe, it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";
import { HttpError } from "./errors";

const testResponseData = { testKey: "testData" };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
  it("should return any available response data", () => {
    const testData = { key: "test" };

    const result = sendDataRequest(testData);

    return expect(result).resolves.toEqual(testResponseData);
  });

  it("should convert the provided data to JSON before sending te request", async () => {
    const testData = { key: "test" };
    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }
    return expect(errorMessage).not.toBe("Not a string.");
  });

  it("should throw an HttpError in case of non-ok responses", () => {
    testFetch.mockImplementationOnce((url, options) => {
      return new Promise((resolve, reject) => {
        const testResponse = {
          ok: false,
          json() {
            return new Promise((resolve, reject) => {
              resolve(testResponseData);
            });
          },
        };

        resolve(testResponse);
      });
    });

    const testData = { ket: "test" };

    const result = sendDataRequest(testData);

    return expect(result).rejects.toBeInstanceOf(HttpError);
  });
});
