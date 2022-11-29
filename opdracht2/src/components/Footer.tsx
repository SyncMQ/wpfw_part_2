import { Link, Typography } from '@mui/material';
import React from 'react';

function Footer() {
	return (
		<>
			<Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 1 }}>
				{'Copyright © '}
				<Link color="inherit" href="https://pretpark.nl/">
                    Pretpark NL
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
			<Typography variant='body2' color="text.secondary" align='center'>
               Leidschendam 420, Den Haag
			</Typography>
		</>
	);
}

export default Footer;