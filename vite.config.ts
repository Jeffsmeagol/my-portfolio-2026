import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig(({ command }) => ({
	resolve: { tsconfigPaths: true },
	// Local development needs no Netlify services or account connection.
	plugins: [
		devtools(),
		command === "build" && netlify(),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
	],
}));

export default config;
