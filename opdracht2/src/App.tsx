import React, {lazy} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Paper } from '@mui/material';
import Topbar from './components/Topbar';

const Home = lazy(() => import('./routes/Home'));
function App() {
	const theme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#5F19D2'
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
					<Route path='/' element={<Home />} />
				</Routes>				
			</Paper>

		</ThemeProvider>
	);
}

export default App;
