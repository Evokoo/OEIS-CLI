import axios from "axios";

export async function getResults(sequence: string) {
	const url: string = `https://oeis.org/search?q=${sequence}&fmt=json`;

	try {
		axios.get(url).then((response) => {
			const results = response!.data.results;

			if (results.length === 0) {
				console.log("EMPTY");
			} else {
				for (let result of results) {
					console.log(result.number);
				}
			}
		});
	} catch (error) {
		console.error(error);
	}
}
