import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Paper } from '@mui/material';
import Contact from './routes/Contact';
import Footer from './components/Footer';

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
					<Route path='/contact' element={<Contact/>} />
				</Routes>
				<Footer />
			</Paper>

		</ThemeProvider>
	);
}

export default App;
