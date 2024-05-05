/**
 * Validate and clean the input string
 * @param {string} - Input sequence
 * @return {string} cleaned input string
 * @throws {RangeError} Sequence cannot be empty
 * @throws {TypeError} Sequence can only contain numbers and whitespace
 */

export function cleanString(input: string): string {
	if (input.trim().length === 0) {
		throw RangeError("Sequence cannot be empty");
	}

	if (!/^[0-9 ]+$/.test(input)) {
		throw TypeError("Sequence must only contain numbers and whitespace");
	}

	return (input.match(/\d+/g) || []).join(",");
}
