
import { Button, Card, CardContent, Divider,Grid,TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Home() {
	const [dateValue, setDateValue] = useState(null);
	return (
		<Container sx={{pt:2}} component='main'>
			<Typography component='h1'variant={'h2'} align={'center'}>
				Maak een Boeking
			</Typography>
			<Divider />
			
			<Card
				component={'form'}
				elevation={2}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					mt:4
				}}>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label="Kies een dag"
									value={dateValue}
									onChange={(newValue) => {
										setDateValue(newValue);
									}}
									renderInput={(params) => <TextField {...params} variant={'standard'} fullWidth/>}
								/>
							</LocalizationProvider>
						</Grid>
						<Grid item xs={12}>
							<TextField type={'number'} variant='standard' size='small' label='Aantal Mensen' fullWidth />
						</Grid>
						<Grid item xs={12}>
							<TextField  helperText='E-mails moeten een "@" hebben. vb: iemand@hhs.nl' type={'email'} variant='standard' size='small' label='Email' fullWidth/>
						</Grid>
						<Grid item xs={12}>
							<Button variant='contained'>
								Boeking aanmaken
							</Button>
						</Grid>
					</Grid>

					
					
				</CardContent>
			</Card>
		</Container>

	);
}

export default Home;