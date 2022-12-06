
import React from 'react';
import { Card, CardContent, CardMedia, Container, Divider, Grow, IconButton, Tooltip, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
function Contact({ In }: { In: boolean }) {
	return (
		<Grow in={In}>
			<Container component={'main'} sx={{
				mt: 2
			}}>
				<Card elevation={3} sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignContent: 'center',
					mt: 2,
				}}>
					<Typography variant='h2' align='center'>
                    Neem contact met ons!
					</Typography>
					<CardContent sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignContent: 'center',
						mt: 1,
						ml: '35%',
						mr: '35%'
					}}>
						<Tooltip title={'Bellen'}>
							<IconButton component={'a'} href="tel:123-456-7890">
								<PhoneIcon fontSize='large' />
							</IconButton>
						</Tooltip>
						<Tooltip title={'Email'}>
							<IconButton component={'a'} href='mailto:test@example.com'>
								<MailIcon fontSize='large' />
							</IconButton>
						</Tooltip>
						<Tooltip title={'Instagram'}>
							<IconButton component={'a'} href='instagram.com'>
								<InstagramIcon fontSize='large' />
							</IconButton>
						</Tooltip>
						<Tooltip title={'Facebook'}>
							<IconButton component={'a'} href='https://media.tenor.com/CWgfFh7ozHkAAAAC/rick-astly-rick-rolled.gif'>
								<FacebookIcon fontSize='large' />
							</IconButton>
						</Tooltip>
					</CardContent>

				</Card>
				<Card elevation={2} sx={{ display: 'flex', mt: 2 }}>
					<CardContent component={'article'}>
						<Typography component={'h1'} variant='h3'>
                       Contact informatie.
						</Typography>
						<Divider />
						<Typography>
                        Pariatur ea Lorem quis cillum aliqua. Eu elit in excepteur incididunt ad eiusmod laborum ut. Ea tempor mollit voluptate occaecat aute incididunt nisi ullamco. In officia dolor duis cupidatat ipsum eu qui consequat. Aute sint occaecat adipisicing dolor sit nostrud sit cillum proident nulla nisi aute proident fugiat. Nisi cillum ex sint sit ad nisi.
						</Typography>
						<br />
						<Typography>
                        Pariatur ea Lorem quis cillum aliqua. Eu elit in excepteur incididunt ad eiusmod laborum ut. Ea tempor mollit voluptate occaecat aute incididunt nisi ullamco. In officia dolor duis cupidatat ipsum eu qui consequat. Aute sint occaecat adipisicing dolor sit nostrud sit cillum proident nulla nisi aute proident fugiat. Nisi cillum ex sint sit ad nisi.
						</Typography>
					</CardContent>
					<CardMedia component={'img'}
						src={'https://media.tenor.com/MczP9_agHqYAAAAC/bob-odenkirk-better-call-saul.gif'}
						sx={{
							maxWidth: 500,
							maxHeight: 500,
							height: 'auto',
							width: 'auto',
						}} />
				</Card>
			</Container>
		</Grow>
	);
}

export default Contact;