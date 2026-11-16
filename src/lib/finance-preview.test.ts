import { describe, it } from "node:test";
import { strict as assert } from "node:assert";
import { financialSummary } from "./finance-preview";

describe("Financial dashboard calculator", () => {
  it("calculates profit as revenue less costs", () => assert.equal(financialSummary(125000, 80000).profit, 45000));
  it("calculates margin as profit divided by revenue", () => assert.equal(financialSummary(125000, 80000).margin, 36));
  it("handles zero revenue without dividing by zero", () => assert.equal(financialSummary(0, 500).margin, 0));
  it("preserves a loss when costs exceed revenue", () => assert.equal(financialSummary(1000, 1500).profit, -500));
});