import { defineConfig } from "vite";
import { resolve } from "node:path";
import tsconfigpaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigpaths()],
	build: {
		target: "firefox115",
		outDir: "dist",
		lib: {
			formats: ["es"],
			entry: [resolve(__dirname, "src", "main.ts")],
			fileName: (_, entryName) => {
				return `${entryName}.js`;
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
			output: {},
		},
		minify: false,
	},
});
