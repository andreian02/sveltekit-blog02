import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';

import path from 'path';
const dirname = path.resolve(fileURLToPath(import.meta.url), '../');


const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: {
		mds: path.join(dirname, './src/routes/posts/_layout.svelte'),
	},

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
