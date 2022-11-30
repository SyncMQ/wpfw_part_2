import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Paper } from '@mui/material';

function App() {
	const theme = createTheme({
		palette: {
			mode: 'dark',
		}
	});
	return (
		<ThemeProvider theme={theme}>

			<Paper sx={{
				minHeight: '100vh',
				borderRadius: 0
			}}>
				<Routes>
					<Route path='/' element={<Home/>} />
				</Routes>
			</Paper>

		</ThemeProvider>
	);
}

export default App;
