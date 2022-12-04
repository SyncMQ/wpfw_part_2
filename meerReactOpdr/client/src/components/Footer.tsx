import { Link, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
	const navigate = useNavigate();
	return (
		<>
			<Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 8, mb: 1 }}>
				{'Copyright © '}
				<Link sx={{
					cursor:'pointer'
				}} color="inherit" onClick={()=> navigate('/contact')}>
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