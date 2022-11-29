import React from 'react';
import {
	CircularProgress, Grid, Paper, Typography 
} from '@mui/material';
function LoadingScreen() {
	return (
		<>
			<Paper sx={{
				height: '100vh'
			}}>
				<Grid
					container
					spacing={0}
					direction="column"
					alignItems="center"
					justifyContent="center"
					style={{
						minHeight: '100vh'
					}}
				>
					<Typography variant='h4'
						sx={{
							mb: 8
						}}>
						{'One moment please...'}
					</Typography>
					<CircularProgress color='primary' />

				</Grid>
			</Paper>
		</>
	);
}

export default LoadingScreen;