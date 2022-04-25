// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static'
import vercel from '@sveltejs/adapter-vercel';

import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	kit: {
		adapter: vercel({
			pages: 'public',
			assets: 'public'
		}),

		vite: {
			// allows vite access to ./posts
			server: {
				fs: {
					allow: ['./']
				}
			}
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	preprocess: [mdsvex(mdsvexConfig)]


};

export default config;
