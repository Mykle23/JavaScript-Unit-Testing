import { it, expect } from "vitest";
import { add } from "./math";
it("should summarize all number values in a array", () => {
  const result = add([0, 1, 2, 3, 4]);
  expect(result).toBe(10);
});
