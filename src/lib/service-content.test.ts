import { describe, it as test } from "node:test";
import { strict as assert } from "node:assert";
import { PROFILE } from "./service-content";

describe("Required service positioning", () => {
  test("uses the requested Dubai phone number", () => assert.equal(PROFILE.phone, "+971553037751"));
  test("keeps the base in Dubai", () => assert.equal(PROFILE.location, "Dubai, UAE"));
  test("records six ACCA papers remaining", () => assert.equal(PROFILE.accaRemaining, 6));
  test("serves all three requested markets", () => assert.deepEqual(PROFILE.markets, ["Dubai", "UK", "US"]));
  test("supports flexible working hours", () => assert.equal(PROFILE.flexibleHours, true));
});