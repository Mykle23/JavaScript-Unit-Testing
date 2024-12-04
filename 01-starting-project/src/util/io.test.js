import { describe, it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");

describe("writeData()", () => {
  it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFileName = "test.txt";

    const result = writeData(testData, testFileName);

    // return expect(result).resolves.toBeUndefined();
    expect(fs.writeFile).toBeCalled();
  });
});
