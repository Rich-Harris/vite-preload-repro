/** @type {import('vite').UserConfig} */
const config = {
	build: {
		cssCodeSplit: true,
		outDir: 'dist',
		minify: false,
		rollupOptions: {
			input: 'src/index.js',
			output: {
				entryFileNames: '[name]-[hash].js',
				chunkFileNames: '[name]-[hash].js',
				assetFileNames: '[name]-[hash][extname]'
			}
		}
	}
};

export default config;
