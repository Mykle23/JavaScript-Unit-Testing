import { describe, it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "test@test.com";

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe("generateTokenPromise", () => {
  it("should generate a token value", () => {
    const testUserEmail = "test@test.com";

    const result = generateTokenPromise(testUserEmail);

    return expect(result).resolves.toBeDefined();
  });

  it("should generate a token value", async () => {
    const testUserEmail = "test@test.com";

    const result = await generateTokenPromise(testUserEmail);

    expect(result).toBeDefined();
  });
});
