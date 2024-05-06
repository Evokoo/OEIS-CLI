import axios from "axios";
import chalk from "chalk";
import ora from "ora";

export async function getResults(sequence: string) {
	const url: string = `https://oeis.org/search?q=${sequence}&fmt=json`;
	const spinner = ora(`Searching OEIS for ${sequence}...`).start();

	axios
		.get(url)
		.then((response) => {
			const results = response!.data.results;

			if (!results) {
				spinner.fail(chalk.red(`No results found for ${sequence}`));
			} else {
				spinner.succeed(
					chalk.green(`${response.data.count} Results found for ${sequence}\n`)
				);

				console.log(
					chalk.blue.bold("See results | ") +
						chalk.yellow(`https://oeis.org/search?q=${sequence}&fmt=short`)
				);
			}
		})
		.catch((error) => {
			spinner.fail(chalk.bgRed.black(` ${error.code} `));
		})
		.finally(() => {
			process.exit(0);
		});
}
