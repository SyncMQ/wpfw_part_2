import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {
	useCallback,
} from 'react';
import t from 'grapeseed/src/config/lang/language';
import {
	useNavigate
} from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Sidebar({ isMenuOpen: openSidebarMenu, setMenuOpen }:
	{ isMenuOpen: boolean, setMenuOpen(value: boolean): void }) {
	const navigate = useNavigate();
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

	const list = (anchor: Anchor) => (
		<Box
			sx={{
				width: 250
			}}
			role="presentation"
			// onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => {
						navigate('/customers');
						setMenuOpen(false);
					}}>
						<ListItemIcon>
							<InboxIcon />
						</ListItemIcon>
						<ListItemText primary={t('Customers')} />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text}
						disablePadding>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<Drawer
			anchor={'left'}
			open={openSidebarMenu}
			onClose={toggleDrawer(false)}
		>
			{list('left')}
		</Drawer>
	);
}
