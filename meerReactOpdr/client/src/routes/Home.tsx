
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, AlertColor, Button, Card, CardContent, Divider, Grid, Grow, Snackbar, SnackbarProps, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function Home() {
	const [dateValue, setDateValue] = useState<string | null>(null);
	const [showSnackBar,setShowSnackbar] = useState(false);
	const [snackbarProps, setSnackbarProps] = useState<Element | any>(null);
	const [currentAvailableSpots, setCurrentAvailableSpots] = useState<number | null>(null);
	// useEffect(() => {
	// 	fetch('/api/reserveering').then((res) => {
	// 		res.json().then((e) => {
	// 			console.log(e);
	// 		});
	// 	});
	// }, []);

	const onDateChange = useCallback(async (value: string) => {
		const date = new Date(value);
		const apiSafeDate = `${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}`;
		console.log(apiSafeDate);
		setDateValue(value);
		const res = await fetch('/api/reserveering/datum',{
			headers: {
				'datum': apiSafeDate
			}
		});
		setCurrentAvailableSpots(await res.json());
	},[]);

	const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement> & React.FormEvent<HTMLDivElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const payload = {
			datum: data.get('datum') as string,
			aantalMensen: parseInt(data.get('aantalMensen') as string),
			email: data.get('email') as string

		};

		fetch('/api/reserveering', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		}).then(async (res) => {
			if (res.status !== 200) {
				setSnackbarProps({
					message: `Error iets ging mis: ${await res.text()}`,
					severity: 'error'
				});
				setShowSnackbar(true);
				return;
			}
			console.log('good');
			setSnackbarProps({
				message:`Reserveering is gelukt voor! email gestuurd naar: ${payload.email}`,
				severity: 'success'
			});
			setShowSnackbar(true);
		}).catch(() => {
			console.log('bad');
		});
	}, []);


	return (
		<Container sx={{ pt: 2 }} component='main'>
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
											onDateChange(newValue as string);
										}}
										autoFocus
										renderInput={(params) => <TextField helperText={currentAvailableSpots !== null?`beschikbaar tickets op deze dag: ${currentAvailableSpots}`:null} {...params} variant={'standard'} fullWidth name='datum' />}
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
								<Button variant='contained' type='submit' disabled={currentAvailableSpots === 0}>
									Boeking aanmaken
								</Button>
							</Grid>
						</Grid>



					</CardContent>
				</Card>
			</Grow>
			<PopUp {...snackbarProps} open={showSnackBar} setOpen={setShowSnackbar} />
		</Container>

	);
}

export default Home;

function PopUp({ message, severity, open, setOpen }: { message: string, severity: AlertColor, open:boolean, setOpen: (bool:boolean)=>void}) {
	const handleClose = useCallback((event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	},[]);
	return (
		<Snackbar
			anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
			open={open}
			onClose={handleClose}
			autoHideDuration={7000}
		>
			<Alert severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
}
