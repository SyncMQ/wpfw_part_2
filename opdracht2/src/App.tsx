import React, {lazy} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Paper } from '@mui/material';

const Home = lazy(() => import('./routes/Home'));
function App() {
	const theme = createTheme({
		palette: {
			mode: 'dark'
		}
	});
	return (
		<ThemeProvider theme={theme}>
			<Paper sx={{
				height: '100vh',
				borderRadius: 0
			}}>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>				
			</Paper>

		</ThemeProvider>
	);
}

export default App;
