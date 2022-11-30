
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, CardContent, Divider,Grid,Grow,TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Home() {

	useEffect(() => {
		fetch('/api/reserveering').then((res) => {
			res.json().then((e) => {
				console.log(e);
			});
		});
	},[]);
	const [dateValue, setDateValue] = useState(null);
	const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement> & React.FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log(data);
	},[]);
	return (
		<Container sx={{pt:2}} component='main'>
			<Grow in>
				<Typography component='h1' variant={'h2'} align={'center'}>
					Maak een Boeking
				</Typography>
			</Grow>
			<Divider />
			<Grow in timeout={500}>
				<Card
					component={'form'}
					onSubmit={handleSubmit}
					elevation={2}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						mt: 4
					}}>
					<CardContent>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DatePicker
										disablePast
										label="Kies een dag"
										value={dateValue}
										onChange={(newValue) => {
											setDateValue(newValue);
										}}
										autoFocus

										renderInput={(params) => <TextField {...params} variant={'standard'} fullWidth name='datum' />}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={12}>
								<TextField name='aantalMensen' type={'number'} variant='standard' size='small' label='Aantal Mensen' fullWidth />
							</Grid>
							<Grid item xs={12}>
								<TextField name='email' helperText='E-mails moeten een "@" hebben. vb: iemand@hhs.nl' type={'email'} variant='standard' size='small' label='Email' fullWidth />
							</Grid>
							<Grid item xs={12}>
								<Button variant='contained' type='submit'>
									Boeking aanmaken
								</Button>
							</Grid>
						</Grid>



					</CardContent>
				</Card>
			</Grow>
			
		</Container>

	);
}

export default Home;