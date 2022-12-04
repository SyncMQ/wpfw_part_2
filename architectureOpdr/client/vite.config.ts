import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/attractie': {
				target: 'http://localhost:8080/attractie',
				changeOrigin: true,
				rewrite: (path) => path.replace(/attractie/, '')
			},
			'/suggestie': {
				target: 'http://localhost:8080/suggestie',
				changeOrigin: true,
				rewrite: (path) => path.replace(/suggestie/, '')
			},
		}
	}
});
