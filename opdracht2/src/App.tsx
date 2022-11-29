import React, {lazy, Suspense} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Paper } from '@mui/material';
import Topbar from './components/Topbar';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
// Routes to lazy load
const Home = lazy(() => import('./routes/Home'));

function App() {
	const theme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#5F19D2'
			},
			background: {
				paper: '#161727',
				default: '#161727'
			}
		}
	});
	return (
		<ThemeProvider theme={theme}>
			
			<Paper sx={{
				minHeight: '100vh',
				borderRadius: 0
			}}>
				<Topbar />
				<Routes>
					<Route path='/' element={<Suspense fallback={<LoadingScreen/>}><Home /></Suspense>} />
				</Routes>	
				<Footer/>
			</Paper>

		</ThemeProvider>
	);
}

export default App;
