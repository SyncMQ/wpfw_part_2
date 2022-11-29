import { Card, CardActionArea, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';
type card = {
	image: string,
	date: string,
	title: string,
	description: string,
	tags: string[]
}
const cards: card[] = [{
	image: 'https://www.walibi.nl/sites/default/files/widget/text_image/2022-08/Header_KV_Website_5000x3536px_LR.jpg',
	date: 'October 2022',
	title: 'Spookhuis',
	description: 'Aanstaande vrijdag kom Halloween vieren samen in ons pretpark!',
	tags : ['Spannend', 'Seizoen']
},
{
	image: 'https://www.walibi.nl/sites/default/files/styles/1280x711/public/content/editorial/2020-02/fastlane_0.jpg?itok=BrMeK8Ek',
	date: 'October 2022',
	title: 'Snelste Actbaan in Nederland',
	description: 'Beschikbaar tot 31 october. kom langs en probeer on nieuwe achtbaan!',
	tags:['Snel','Achtbaan','Super leuk']
},
{
	image: 'https://cdn-cms.bookingexperts.nl/media/851/31/preprocessed.jpg',
	date: 'October 2022',
	title: 'Halloween eten',
	description: 'Deze maand heeft ons pretpartk een speciale menu om je smaakpapillen te afschrikken!',
	tags:['Special Menu','Eten']
}
];

function Home() {
	return (
		<Container>
			<Typography variant='h3' align='center' sx={{
				mt: 2,
				mb:4
			}}>
				Welkom naar Pretpark NL!
			</Typography>

			<Grid container spacing={4}>
				{cards.map((card) => {
					return (
						<Grid key={card.title } item xs={4}>
							<Card sx={{ maxWidth: 450 }} onClick={() => { console.log('click'); }}>
								<CardActionArea>
									<CardMedia
										component="img"
										height="250"
										image={card.image}
										alt={card.title}
									/>
									<CardContent>
										<Typography gutterBottom variant="subtitle2" component="div">
											{card.date}
										</Typography>
										<Typography gutterBottom variant="h5" component="div">
											{card.title}
										</Typography>
										<Typography sx={{ mb: 2 }} variant="body1" color="text.secondary">
											{card.description}
										</Typography>
										{card.tags.map((tag) => <Chip color='primary' sx={{ mr: 1 }} key={tag} label={tag} />)}
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