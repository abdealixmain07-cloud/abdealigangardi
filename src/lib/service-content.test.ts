import { describe, expect, test } from "bun:test";
import { PROFILE } from "./service-content";

describe("Required service positioning", () => {
  test("uses the requested Dubai phone number", () => expect(PROFILE.phone).toBe("+971553037751"));
  test("keeps the base in Dubai", () => expect(PROFILE.location).toBe("Dubai, UAE"));
  test("records six ACCA papers remaining", () => expect(PROFILE.accaRemaining).toBe(6));
  test("serves all three requested markets", () => expect(PROFILE.markets).toEqual(["Dubai", "UK", "US"]));
  test("supports flexible working hours", () => expect(PROFILE.flexibleHours).toBe(true));
});