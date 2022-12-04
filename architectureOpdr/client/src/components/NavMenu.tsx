import React, { useState,useCallback } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default function NavMenu(){
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = useCallback(() =>{
		setCollapsed(!collapsed);
	},[collapsed]);

	return (
		<header>
			<Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
				<Container>
					<NavbarBrand tag={Link} to="/">Pretpark Den Haag</NavbarBrand>
					<NavbarToggler onClick={toggleNavbar} className="mr-2" />
					<Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
						<ul className="navbar-nav flex-grow">
							<NavItem>
								<NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
							</NavItem>                
							<NavItem>
								<NavLink tag={Link} to="/attracties" className="text-dark">Attractielijst</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/attractieToevoegen" className="text-dark">Voeg attractie toe</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/suggestie" className="text-dark">Maak een suggestie</NavLink>
							</NavItem>
						</ul>
					</Collapse>
				</Container>
			</Navbar>
		</header>
	);
}



