import { Autocomplete, Box, Button, Container, Grid, Grow, Paper, Step, StepLabel, Stepper, TextField, Typography } from '@mui/material';
import React from 'react';
import { Event, events } from './events';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useParams } from 'react-router-dom';
const steps = [

];

function Reserveer({ In }: { In: boolean }) {
	const [totalPrice, setTotalPrice] = React.useState(60);
	const [currentStep, setCurrentStep] = React.useState(0);
	const { id } = useParams();
	const [currentListValue, setCurrentListValue] = React.useState<Event | undefined | any>('');
	React.useEffect(() => {
		const currentEvent: Event | undefined = events.find((event) => event.label === id);

		if (currentEvent) {
			setCurrentListValue(currentEvent);
			setTotalPrice(currentEvent.price);
		}
	}, []);
	const onchange = React.useCallback((event: any, value: Event) => {
		if (!value) {
			setCurrentListValue('');
			setTotalPrice(0);
			return;
		}
		setCurrentListValue(value);
		setTotalPrice(value.price);
	}, [setCurrentListValue]);

	return (
		<Grow in={In}>
			<Container sx={{ mt: 2 }}>
				<Typography component='h1' variant={'h3'} align='center' sx={{ mb: 2 }}>
                Reserveer
				</Typography>
				<Paper elevation={2} sx={{ p: 1 }}>
					<Stepper activeStep={currentStep} sx={{ mt: 4 }} >
						<Step>
							<StepLabel>
                            step
							</StepLabel>
						</Step>
						<Step>
							<StepLabel>
                            step
							</StepLabel>
						</Step>
						<Step>
							<StepLabel>
                            step
							</StepLabel>
						</Step>
					</Stepper>

					<Grid container sx={{ p: 2 }} spacing={2}>
						<Grid item xs={6}>
							<TextField fullWidth label={'Hoeveelheid'} type={'number'} variant={'standard'} color='secondary' defaultValue={1} />
						</Grid>
						<Grid item xs={6}>
							<Autocomplete
								aria-label='evenement dropdown'
								disablePortal
								options={events}
								value={currentListValue}
								onChange={onchange}
								renderInput={(params) => <TextField {...params} label="Evenement" variant='standard' color='secondary' />}
							/>
						</Grid>
					</Grid>
					<Typography variant='body1' sx={{ p: 2 }} align='right'>
                    Totale Prijs: € {currentListValue !== '' ? totalPrice : 0}.00
					</Typography>
					<Box sx={{
						display: 'flex',
						flexDirection: 'row-reverse',
						m: 1
					}}>
						<Button variant='contained' endIcon={<ArrowForwardIosIcon />}>
                        Volgende
						</Button>
					</Box>
				</Paper>
			</Container>
		</Grow>
	);
}

export default Reserveer;