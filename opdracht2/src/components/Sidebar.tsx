import * as React from 'react';
import {
	useCallback,
} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Chip, IconButton, Tooltip, Typography } from '@mui/material';

const routes = [
	{
		title: 'Home',
		route: '/',
		icon: <HomeIcon />
	},
	{
		title: 'Over ons',
		route: '/about',
		icon: <InfoIcon />
	},
	{
		title: 'Contact',
		route: '/contact',
		icon: <ConnectWithoutContactIcon/>
	},
	{
		title: 'Reserveer',
		route: '/reserveer',
		icon: <BookmarkBorderIcon />
	},
	
];

export default function Sidebar({ isMenuOpen: openSidebarMenu, setMenuOpen, changePage }:
	{ isMenuOpen: boolean, setMenuOpen(value: boolean): void, changePage: (location:string)=>void}) {
	const [temperatuur, setTemperatuur] = React.useState(5);
	const toggleDrawer =
		useCallback((open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
						(event as React.KeyboardEvent).key === 'Shift')
				) {
					return;
				}

				setMenuOpen(open);
			}, [setMenuOpen]);
	const closeDrawer = React.useCallback((newLocation?: string) => {
		setMenuOpen(false);
		newLocation ? changePage(newLocation) : null;
	}, []);
	
	React.useEffect(() => {
		fetch('https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&hourly=temperature_2m')
			.then(response => {
				response.json().then(data => {
					setTemperatuur(data.hourly.temperature_2m[0]);
				});
			});	
	},[]);

	const list = () => (
		<Box
			sx={{
				width: 250,
			}}
			role="presentation"
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Typography variant="h5">
						Menu
					</Typography>
					<Tooltip title='Menu sluiten'>
						<IconButton onClick={() => closeDrawer()}>
							<ArrowBackIosNewIcon />
						</IconButton>
					</Tooltip>
					
				</ListItem>
				<ListItem>
					<Typography variant='body2'>
						Temperatuur: <Chip size='small' label={`${temperatuur}°C`} sx={{bgcolor:'primary.light'}}/>
					</Typography>
				</ListItem>
				<Divider />
				{routes.map((route) => {
					return (
						<ListItem disablePadding key={route.title}>
							<ListItemButton onClick={() => closeDrawer(route.route)}>
								<ListItemIcon>
									{route.icon}
								</ListItemIcon>
								<ListItemText primary={route.title} />
							</ListItemButton>
						</ListItem>);
				})}
				
			</List>
		</Box>
	);

	return (
		<Drawer
			anchor={'left'}
			open={openSidebarMenu}
			onClose={toggleDrawer(false)}
		>
			{list()}
		</Drawer>
	);
}
