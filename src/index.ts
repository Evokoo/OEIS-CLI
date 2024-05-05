#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { program } from "commander";

import { cleanString } from "./validation.js";
import { getResults } from "./fetch.js";

program.version("1.0.0").description("oeis-cli");

function reset() {
	program.action(() => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "sequence",
					message: "Enter a number sequence seperated with a space\n\n",
				},
			])
			.then((response) => {
				const sequence: string | number = cleanString(response.sequence);

				if (sequence === 0) {
					return reset();
				} else {
					getResults(sequence as string);
				}
			});
	});

	program.parse(process.argv);
}

reset();
