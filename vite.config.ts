/// <reference types="vitest" />
import { resolve } from "node:path";
import { defineConfig } from "vite";
import tsconfigpaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		tsconfigpaths(),
		dts({
			insertTypesEntry: true,
			exclude: ["test"],
		}),
	],
	build: {
		// target: "firefox60", // Since GJS 1.53.90
		// target: "firefox68", // Since GJS 1.63.90
		// target: "firefox78", // Since GJS 1.65.90
		// target: "firefox91", // Since GJS 1.71.1
		// target: "firefox102", // Since GJS 1.73.2
		target: "firefox115", // Since GJS 1.77.2
		lib: {
			entry: resolve(__dirname, "lib", "index.ts"),
			formats: ["es", "cjs"],
			fileName: (module, filename) => {
				const extension = module === "es" ? "js" : module;
				return `${filename}.${extension}`;
			},
		},
		rollupOptions: {
			external: [
				/^gi:\/\/*/i,
				/^resource:\/\/*/i,
				"gettext",
				"system",
				"cairo",
			],
			output: {
				preserveModules: true,
			},
		},
		minify: false,
		cssMinify: false,
	},
	test: {
		globals: true,
		watch: false,
	},
});
