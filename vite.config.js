// @ts-check
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	build: {
		cssCodeSplit: true,
		lib: {
			entry: resolve('src/index.js'),
			name: 'app', // this doesn't seem to do anything?
			formats: ['es']
		},
		outDir: 'dist',
		minify: false,
		rollupOptions: {
			output: {
				entryFileNames: '[name]-[hash].js',
				chunkFileNames: '[name]-[hash].js',
				assetFileNames: '[name]-[hash][extname]'
			}
		}
	}
};

export default config;