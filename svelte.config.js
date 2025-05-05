import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Use static adapter for GitHub Pages
		adapter: adapter({
			// Use index.html for all routes (SPA fallback)
			fallback: 'index.html',
			strict: false
		}),
		
		// Empty base path for custom domain
		paths: {
			base: ''
		},
		
		// Prerender all routes
		prerender: {
			handleHttpError: 'warn',
			entries: ['*']
		}
	}
};

export default config;
