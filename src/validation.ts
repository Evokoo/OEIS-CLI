/**
 * Validate and clean the input string
 * @param {string} - Input sequence
 * @return {string} cleaned input string
 * @throws {RangeError} Sequence cannot be empty
 * @throws {TypeError} Sequence can only contain numbers and whitespace
 */

import chalk from "chalk";

export function cleanString(input: string): string | number {
	if (input.trim().length === 0) {
		console.log(chalk.red("Sequence cannot be empty\n"));
		return 0;
	}

	if (!/^[0-9 ]+$/.test(input)) {
		console.log(
			chalk.red("Sequence must only contain numbers and whitespace\n")
		);
		return 0;
	}

	return (input.match(/\d+/g) || []).join(",");
}
