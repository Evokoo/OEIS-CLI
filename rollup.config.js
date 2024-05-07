import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
	input: "src/index.ts", // Your main CLI script
	output: {
		file: "build/oeis-cli.js", // Output file name
		format: "cjs", // CommonJS format for Node.js execution
	},
	plugins: [typescript(), commonjs(), resolve(), json()],
};
