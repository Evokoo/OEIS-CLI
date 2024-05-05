import { describe, test, expect } from "bun:test";
import { cleanString } from "../src/validation";

describe("CleanString unit tests", () => {
	// Test for empty string
	test("cleanString throws RangeError for empty string", () => {
		expect(() => cleanString("")).toThrowError(RangeError);
	});
	// Test for string with only whitespace
	test("cleanString throws RangeError for whitespace-only string", () => {
		expect(() => cleanString(" ")).toThrowError(RangeError);
	});
	// Test for invalid characters
	test("cleanString throws TypeError for invalid characters", () => {
		expect(() => cleanString("abc")).toThrowError(TypeError);
	});
	// Test for invalid characters
	test("cleanString throws TypeError for invalid characters", () => {
		expect(() => cleanString("1,34 5")).toThrowError(TypeError);
	});
	// Test for valid string with numbers and commas
	test("cleanString returns comma-separated numbers (valid case)", () => {
		expect(cleanString("1 2 3")).toBe("1,2,3");
	});
	// Test for string with extra whitespace
	test("cleanString handles extra whitespace", () => {
		expect(cleanString("  1   2 3    ")).toBe("1,2,3");
	});
});
