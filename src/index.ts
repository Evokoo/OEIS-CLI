#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { program } from "commander";
import { cleanString } from "./validation.js";
import { getResults } from "./results.js";

program.version("1.0.0").description("oeis-cli");

function initProgram() {
	//Title
	console.log(chalk.yellow.bold("OEIS Quick Search"));

	//Prompt
	program.action(() => {
		inquirer
			.prompt([
				{
					type: "input",
					name: "sequence",
					message: chalk.blue.bold(
						"Enter a number sequence seperated with a space"
					),
				},
			])
			.then((response) => {
				const sequence: string | number = cleanString(response.sequence);

				if (sequence === 0) {
					return initProgram();
				} else {
					getResults(sequence as string);
				}
			});
	});

	program.parse(process.argv);
}

initProgram();
