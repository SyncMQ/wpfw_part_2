import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Container, Grid, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { cards } from './events';

const buttons = [
	{
		title:'Over ons',
		bg: {
			bgcolor: 'primary.main',
		},
		route: '/about',
	},
	{
		title:'Reserveer',
		bg: {
			bgcolor: 'primary.light',
		},
		route: '/reserveer',
	},
	{
		title:'Contact',
		bg: {
			bgcolor: 'primary.main',
		},
		route: '/contact',
	},
];
function Home() {
	const navigate = useNavigate();
	return (
		<Container component={'main'}>
			<Typography variant='h3' align='center' sx={{
				mt: 2,
				mb:4
			}}>
				Welkom naar Pretpark NL!
			</Typography>
			<Grid container spacing={4}>
				{buttons.map((button) => {
					return (
						<Grid key={button.title} item xs={4}>
							<Card sx={{ maxWidth: 450, maxHeight: 100, mb: 4, ...button.bg }} onClick={() => { navigate(button.route); }}>
								<CardActionArea>
									<CardContent sx={{display:'flex', justifyContent:'space-between'}}>
										<Typography variant='h6'>
											{button.title}
										</Typography>
										<IconButton sx={{ bgcolor: '#00000025' }}>
											<ArrowForwardIosIcon fontSize='small' />
										</IconButton>
									</CardContent>
								</CardActionArea>

							</Card>
						</Grid>
					);
				})}
			</Grid>
			<Grid container spacing={4}>
				{cards.map((card) => {
					return (
						<Grid key={card.title } item xs={4}>
							<Card component={'article'} sx={{ maxWidth: 450 }} onClick={() => { navigate(`/reserveer/${card.title}`); }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="250"
										image={card.image}
										alt={card.title}
									/>
									<CardContent>
										<Typography gutterBottom variant="subtitle2" color="text.secondary" component="div">
											{card.date}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
											{card.title}
										</Typography>
										<Typography sx={{ mb: 2 }} variant="body1">
											{card.description}
										</Typography>
										{card.tags.map((tag) => <Chip sx={{ mr: 1, bgcolor:'primary.dark' }} key={tag} label={tag} />)}
									</CardContent>
								</CardActionArea>
								
							</Card>
						</Grid>
					);
				})}
				
			</Grid>
		</Container>
	);
}

export default Home;