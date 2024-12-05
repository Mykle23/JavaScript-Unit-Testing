import { describe, it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1];
      },
    },
  };
});
describe("writeData()", () => {
  it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFileName = "test.txt";

    const result = writeData(testData, testFileName);

    // return expect(result).resolves.toBeUndefined();
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(testFileName, testData);
  });
});
