import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default ({ mode }) => {
	const dotEnv = { ...process.env, ...loadEnv(mode, process.cwd()) };
	const env = dotEnv.VITE_ENV;
	return defineConfig({
		plugins: [react()],
		server: {
			proxy: {
				'/suggestie': {
					target: env === 'development' ?
						'http://localhost:8080/suggestie' :
						'http://Suggestie_Service/suggestie',
					changeOrigin: true,
					rewrite: (path) => path.replace(/suggestie/, '')
				},
				'/attractie': {
					target: env === 'development' ?
						'http://localhost:8081/attractie' :
						'http://Attractie_Service/attractie',
					changeOrigin: true,
					rewrite: (path) => path.replace(/attractie/, '')
				},
			},
		}
	});
};