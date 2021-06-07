import path from "path";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import babel from "rollup-plugin-babel";
// import json from "rollup-plugin-json";
// import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import ts from "rollup-plugin-typescript2";
const getPath = (_path) => path.resolve(__dirname, _path);
import packageJSON from "./package.json";

const extensions = [".js", ".ts", ".tsx"];
// ts
const tsPlugin = ts({
	tsconfig: getPath("./tsconfig.json"), // 导入本地ts配置
	extensions,
});
// eslint
const esPlugin = eslint({
	throwOnError: true,
	include: ["src/**/*.ts"],
	exclude: ["node_modules/**", "lib/**"],
});

// export default {
// 	input: "/src/main.ts",
// 	output: [
// 		{
// 			file: "build/cjs/utils.cjs.js",
// 			format: "cjs",
// 			// sourcemap: true,
// 		},
// 		{
// 			file: "build/umd/utils.umd.js",
// 			format: "umd",
// 			name: "utils",
// 		},
// 	],
// 	plugins: [
// 		eslint({
// 			throwOnError: true,
// 			throwOnWarning: true,
// 			include: ["src/**"],
// 			exclude: ["node_modules/**"],
// 		}),
// 		json(),
// 		resolve({ mainFields: ["jsnext", "module", "main", "browser"] }),
// 		commonjs(),
// 		babel({
// 			exclude: "node_modules/**", // 排除node_module下的所有文件
// 			runtimeHelpers: true,
// 			plugins: [["@babel/transform-runtime"]],
// 		}),
// 		terser(),
// 	],
// };
// 基础配置
const commonConf = {
	input: getPath("./src/main.ts"),
	plugins: [resolve(extensions), commonjs(), esPlugin, tsPlugin],
};
// 需要导出的模块类型
const outputMap = [
	{
		file: "build/cjs/utils.cjs.js",
		format: "cjs",
		// sourcemap: true,
	},
	{
		file: "build/umd/utils.umd.js",
		format: "umd",
		name: "utils",
	},
];

const buildConf = (options) => Object.assign({}, commonConf, options);

export default outputMap.map((output) =>
	buildConf({ output: { name: packageJSON.name, ...output } }),
);
