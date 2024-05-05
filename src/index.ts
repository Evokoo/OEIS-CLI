#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { program } from "commander";

import { cleanString } from "./validation.js";

program.version("1.0.0").description("oeis-cli");

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
			const sequence: string = cleanString(response.sequence);
		});
});

program.parse(process.argv);
