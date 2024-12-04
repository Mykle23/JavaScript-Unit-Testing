import { it, describe, expect, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn in function ", () => {
    const logger = vi.fn();
    generateReportData(logger);

    expect(logger).toHaveBeenCalledOnce();
  });
});
