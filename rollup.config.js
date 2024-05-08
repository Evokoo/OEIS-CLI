import { nodeResolve } from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
	input: "src/index.ts", // Your main CLI script
	output: {
		file: "build/oeis-cli.js", // Output file name
		format: "es",
	},
	plugins: [
		nodeResolve({ preferBuiltins: true, exportConditions: ["node"] }),
		commonjs(),
		json(),
		esbuild({ minify: true }),
	],
};
