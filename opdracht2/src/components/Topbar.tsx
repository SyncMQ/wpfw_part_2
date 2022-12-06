import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from './Sidebar';

import {Tooltip
} from '@mui/material';
import Searchbar from './Searchbar';

export default function Topbar({changePage}: {changePage: (location:string)=>void}) {
	const [isMenuOpen, setMenuOpen] = React.useState(false);
	const openSidebarMenu = React.useCallback(() => {
		setMenuOpen(true);
	}, []);
	
	return (
		<>
			<Sidebar isMenuOpen={isMenuOpen}
				setMenuOpen={setMenuOpen}
				changePage={changePage}
			/>
			<Box sx={{
				flexGrow: 1
			}}>
				<AppBar position="static" sx={{
					bgcolor: 'primary.main'
				}}>
					<Toolbar>
						<Tooltip title="Open Menu">
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								onClick={openSidebarMenu}
								sx={{
									mr:2
								}}
							>
								<MenuIcon />
							</IconButton>
						</Tooltip>
						<Typography variant="h6"
							onClick={() => { changePage('/');}}
							sx={{
								cursor:'pointer',
								flexGrow: 1
							}}>
							Pretpark
						</Typography>
						<Searchbar placeholderText={'Search...'} setSearchTermValue={ (val: string): void =>{
							console.log('Function not implemented.');
						} } searchTermValue={''}/>
						<Tooltip title="User">
							<IconButton size='large' sx={{
								ml:1
							}}>
								<AccountCircleIcon />
							</IconButton>
						</Tooltip>

					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
}
