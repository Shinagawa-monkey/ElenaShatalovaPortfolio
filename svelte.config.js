import adapter from '@sveltejs/adapter-vercel';

import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
			images: {
				sizes: [640, 828, 1200, 1920, 3840],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 300,
        // placeholder: 'blur', 
				// domains: ['https://elena-shatalova-portfolio.vercel.app/images/projectImages'],
			}
		}),
  },
  preprocess: vitePreprocess(),
};
export default config;
